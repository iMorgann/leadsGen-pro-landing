// @ts-check
const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:3000';
const CHECKOUT = `${BASE}/checkout?plan=1_month&price=35`;

test.describe('Checkout Page — Bug Fix Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CHECKOUT);
  });

  // ─── Bug 1: Input text visibility ────────────────────────────────────────
  test('Bug 1 — wrapper has text-gray-900 (dark text overrides global white)', async ({ page }) => {
    const wrapper = page.locator('div.min-h-screen.bg-gray-50');
    await expect(wrapper).toHaveClass(/text-gray-900/);
  });

  test('Bug 1 — email input text is dark (not white-on-white)', async ({ page }) => {
    const input = page.locator('input[type="email"]');
    await input.fill('test@example.com');

    const color = await input.evaluate(el => {
      return window.getComputedStyle(el).color;
    });

    // rgb(17,24,39) = Tailwind gray-900; must NOT be rgb(255,255,255)
    expect(color).not.toBe('rgb(255, 255, 255)');
    // Should be close to a dark color (R,G,B all < 100)
    const [r, g, b] = color.match(/\d+/g).map(Number);
    expect(r).toBeLessThan(100);
    expect(g).toBeLessThan(100);
    expect(b).toBeLessThan(100);
  });

  test('Bug 1 — typed text is visible (contrast check on email input)', async ({ page }) => {
    const input = page.locator('input[type="email"]');
    await input.fill('visible@test.com');

    const [textColor, bgColor] = await input.evaluate(el => {
      const style = window.getComputedStyle(el);
      return [style.color, style.backgroundColor];
    });

    // Text and background must not be the same color
    expect(textColor).not.toBe(bgColor);
  });

  // ─── Step 1 render ───────────────────────────────────────────────────────
  test('Step 1 — page loads with plan and price from query string', async ({ page }) => {
    await expect(page.locator('text=Complete Your Purchase')).toBeVisible();
    await expect(page.locator('text=1 Month Plan')).toBeVisible();
    await expect(page.locator('text=$35')).toBeVisible();
  });

  test('Step 1 — rejects invalid email and stays on step 1', async ({ page }) => {
    await page.locator('input[type="email"]').fill('not-an-email');
    await page.locator('button[type="submit"]').click();
    // Should still show step 1 content
    await expect(page.locator('text=Email Address')).toBeVisible();
  });

  test('Step 1 — valid email advances to crypto selection (step 2)', async ({ page }) => {
    await page.locator('input[type="email"]').fill('buyer@example.com');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Select Cryptocurrency')).toBeVisible();
  });

  // ─── Bug 2: Error toast surfaces actual server message ───────────────────
  test('Bug 2 — crypto click calls correct Railway API endpoint', async ({ page }) => {
    const requests = [];
    page.on('request', req => {
      if (req.url().includes('/api/') || req.url().includes('railway') || req.url().includes('leadsgen-pro')) {
        requests.push(req.url());
      }
    });

    await page.locator('input[type="email"]').fill('buyer@example.com');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Select Cryptocurrency')).toBeVisible();

    // Click any crypto (USDT is typically configured)
    await page.locator('button:has-text("USDT")').click();
    await page.waitForTimeout(3000);

    // Verify request went to Railway, NOT the old wrong host
    const railwayHit = requests.some(url => url.includes('railway.app'));
    const wrongHostHit = requests.some(url => url.includes('license.leadsgen-pro.shop'));

    expect(wrongHostHit).toBe(false);
    expect(railwayHit).toBe(true);
  });

  test('Bug 2 — error toast shows server message, not generic fallback', async ({ page }) => {
    // Intercept API and return a specific server-side error
    await page.route('**/payment/create', async route => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'USDC payments are not currently available' })
      });
    });

    await page.locator('input[type="email"]').fill('buyer@example.com');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Select Cryptocurrency')).toBeVisible();
    await page.locator('button:has-text("USDC")').click();

    // Should show the actual server error, not the generic fallback
    const toast = page.locator('text=USDC payments are not currently available');
    await expect(toast).toBeVisible({ timeout: 5000 });
  });

  test('Bug 2 — generic fallback still shown when no server error body', async ({ page }) => {
    // Network-level failure (no response body)
    await page.route('**/payment/create', async route => {
      await route.abort('failed');
    });

    await page.locator('input[type="email"]').fill('buyer@example.com');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Select Cryptocurrency')).toBeVisible();
    await page.locator('button:has-text("USDC")').click();

    // Should fall back to generic message
    const toast = page.locator('text=Failed to create order. Please try again.');
    await expect(toast).toBeVisible({ timeout: 5000 });
  });

  // ─── Step 3 render (success path, mocked) ────────────────────────────────
  test('Step 3 — payment screen shows QR code and address when order succeeds', async ({ page }) => {
    await page.route('**/payment/create', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          order: { order_id: 'ORD-TEST-001' },
          crypto_addresses: [
            { coin: 'USDT', network: 'TRC20', address: 'TXYZabc1234567890abcdef1234567890ab' }
          ]
        })
      });
    });

    await page.locator('input[type="email"]').fill('buyer@example.com');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=Select Cryptocurrency')).toBeVisible();
    await page.locator('button:has-text("USDT")').click();

    await expect(page.locator('text=Send Payment')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('text=ORD-TEST-001')).toBeVisible();
    await expect(page.locator('canvas')).toBeVisible(); // QRCode renders as canvas
    await expect(page.locator('text=TXYZabc1234567890abcdef1234567890ab')).toBeVisible();
  });
});
