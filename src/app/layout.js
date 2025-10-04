import './globals.css'

export const metadata = {
  title: 'LeadsGen Pro - Professional Lead Generation Software',
  description: 'Generate high-quality leads with LeadsGen Pro. Advanced automation, real-time validation, and powerful analytics.',
  keywords: 'lead generation, automation, email validator, business leads',
  openGraph: {
    title: 'LeadsGen Pro - Professional Lead Generation Software',
    description: 'Generate high-quality leads with LeadsGen Pro',
    url: 'https://leadsgen-pro.shop',
    siteName: 'LeadsGen Pro',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
