import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarjeta de Control para Rebanadora Bizerba | Reemplazo 60385075102 y 60377330156 | Control Modular MX',
  description: 'Tarjeta de control de reemplazo de alta calidad para rebanadoras Bizerba. Compatible con números de parte 60385075102 y 60377330156. Envío rápido, soporte técnico y fabricación garantizada. Cotiza por WhatsApp.',
  keywords: [
    'tarjeta de control bizerba',
    'repuesto bizerba 60385075102',
    'placa bizerba 60377330156',
    'reparación rebanadora bizerba',
    'refacciones para rebanadoras de carne',
    'tarjeta electrónica bizerba méxico',
    'control modular mx'
  ],
  authors: [{ name: 'Control Modular MX' }],
  creator: 'Control Modular MX',
  publisher: 'Control Modular MX',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bizerba.controlmodularmx.com/',
  },
  openGraph: {
    type: 'product',
    url: 'https://bizerba.controlmodularmx.com/',
    title: 'Tarjeta de Control para Rebanadora Bizerba | Reemplazo 60385075102 y 60377330156',
    description: 'Tarjeta de control de reemplazo de alta calidad para rebanadoras Bizerba. Compatible con números de parte 60385075102 y 60377330156. Envío rápido, soporte técnico y fabricación garantizada.',
    siteName: 'Control Modular MX',
    locale: 'es_MX',
    countryName: 'México',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tarjeta de Control Compatible Bizerba - Control Modular MX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarjeta de Control para Rebanadora Bizerba | Control Modular MX',
    description: 'Tarjeta de control de reemplazo OEM 60385075102 y 60377330156. Envío a todo México.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Tarjeta de Control Compatible Bizerba (Reemplazo exacto)",
              "brand": {
                "@type": "Brand",
                "name": "Control Modular MX"
              },
              "sku": "60385075102",
              "mpn": "60377330156",
              "category": "Refacciones Industriales / Electrónica",
              "description": "Tarjeta de control de reemplazo de alta calidad para rebanadoras Bizerba. Compatible con números de parte 60385075102 y 60377330156.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "MXN",
                "priceValidUntil": "2026-12-31",
                "seller": {
                  "@type": "Organization",
                  "name": "Control Modular MX"
                }
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  )
}
