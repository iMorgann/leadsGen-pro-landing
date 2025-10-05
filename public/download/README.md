# LeadsGen Pro Downloads

## Current Status

✅ **Windows** - `LeadsGenPro-Setup.exe` (94MB) - Ready for download
⏳ **macOS** - Building on GitHub Actions
⏳ **Linux** - Building on GitHub Actions

## Getting macOS & Linux Builds

The macOS and Linux executables are being built automatically via GitHub Actions.

### Download from GitHub Actions:

1. Visit: https://github.com/iMorgann/LeadGen-Pro/actions
2. Click on the latest "Build Multi-Platform Executables" workflow run
3. Wait for all jobs to complete (Windows ✓, macOS, Linux)
4. Download artifacts from the completed workflow:
   - **LeadsGenPro-macOS** - Contains `LeadsGenPro-macOS.dmg`
   - **LeadsGenPro-Linux** - Contains `LeadsGenPro-Linux.AppImage`

### Add to Landing Page:

Once downloaded, copy the files to this directory:

```bash
# macOS
cp ~/Downloads/LeadsGenPro-macOS/LeadsGenPro-macOS.dmg public/download/LeadsGenPro-Mac.dmg

# Linux
cp ~/Downloads/LeadsGenPro-Linux/LeadsGenPro-Linux.AppImage public/download/
```

Then commit and push to deploy:

```bash
git add public/download/
git commit -m "Add macOS and Linux executables"
git push origin master
```

## File Sizes

- Windows: 94MB
- macOS: ~100MB (estimated)
- Linux: ~110MB (estimated)

## Download URLs (on leadsgen-pro.shop)

- Windows: https://www.leadsgen-pro.shop/download/LeadsGenPro-Setup.exe
- macOS: https://www.leadsgen-pro.shop/download/LeadsGenPro-Mac.dmg
- Linux: https://www.leadsgen-pro.shop/download/LeadsGenPro-Linux.AppImage
