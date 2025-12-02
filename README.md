# LeadsGen Pro - Landing Page

Professional landing page for LeadsGen Pro lead generation software with integrated cryptocurrency payment system.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 💰 Cryptocurrency payment integration (USDC, USDT, SOL, LTC, BTC, ETH)
- 📱 Mobile-first responsive design
- ⚡ Fast page loads with Next.js 14
- 🔒 Secure payment flow with QR codes
- 📊 Real-time order status tracking
- 📧 Email notifications
- 🤖 Telegram & Discord bot integration

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Axios for API calls
- QRCode.react for payment QR codes
- React Hot Toast for notifications

## Getting Started

### Prerequisites

- Node.js 18+ installed
- LeadsGen Pro License Server running

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and set:
```
NEXT_PUBLIC_API_URL=https://license.leadsgen-pro.shop
```

3. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
leadsgen-landing/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── checkout/          # Checkout flow
│   │   │   └── page.js
│   │   └── order/             # Order status
│   │       └── [orderId]/
│   │           └── page.js
│   ├── components/            # React components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── Pricing.js
│   │   ├── Download.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   └── services/              # API services
│       └── api.js
├── public/                    # Static files
├── next.config.js            # Next.js config
├── tailwind.config.js        # Tailwind config
└── package.json
```

## Pages

### Home (/)
- Hero section with CTA
- Features showcase
- Pricing plans
- Download links
- Contact information

### Checkout (/checkout)
3-step payment flow:
1. Enter email and select plan
2. Choose cryptocurrency
3. Send payment and submit TXID

### Order Status (/order/[orderId])
- Real-time order status
- Payment verification
- License key display and download
- Auto-polling for status updates

## API Integration

The landing page integrates with the LeadsGen Pro License Server:

- `POST /api/v1/payment/create` - Create order
- `POST /api/v1/payment/submit-txid` - Submit transaction ID
- `GET /api/v1/payment/status/:orderId` - Get order status
- `GET /api/v1/payment/download/:orderId` - Download license

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variable:
   - `NEXT_PUBLIC_API_URL`: Your license server URL
4. Deploy

### Deploy to Other Platforms

Build the production bundle:
```bash
npm run build
```

The output will be in `.next/` directory. Deploy using:
```bash
npm start
```

Or export as static site:
```bash
npm run build
npx next export
```

## Configuration

### Pricing Plans

Edit `src/components/Pricing.js` to modify plans:

```javascript
const plans = [
  {
    name: '1 Month',
    price: 35,
    plan_type: '1_month',
    features: [...]
  },
  // ... more plans
];
```

### Crypto Options

Edit `src/app/checkout/page.js` to modify supported cryptocurrencies:

```javascript
const cryptoOptions = [
  { coin: 'USDC', icon: '💵', network: 'ERC20' },
  // ... more options
];
```

### Contact Information

Update contact details in:
- `src/components/Contact.js`
- `src/components/Footer.js`

## Support

- Email: support@leadsgen-pro.shop
- Telegram: @irootbck

## License

Proprietary - LeadsGen Pro
