import type { Metadata } from 'next'
import WhatsAppButton from '@/components/WhatsAppButton'

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
    'control modular mx',
    'bizerba 603850',
    'bizerba 603773',
    'tarjeta control rebanadora carne',
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

// JSON-LD Schema - Product + FAQPage
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cómo sé si mi rebanadora Bizerba necesita un reemplazo de tarjeta de control?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los síntomas más comunes incluyen: la máquina no enciende, el panel de control no responde, errores intermitentes en la pantalla, o el motor se detiene inesperadamente. Si tu rebanadora presenta alguno de estos síntomas, es probable que la tarjeta electrónica esté dañada."
          }
        },
        {
          "@type": "Question",
          "name": "¿Las tarjetas son compatibles con cualquier modelo de rebanadora Bizerba?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestras tarjetas de reemplazo son compatibles específicamente con los números de parte OEM 60385075102 y 60377330156. Contáctanos con el modelo de tu máquina para confirmar compatibilidad."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrecen garantía en las tarjetas de control?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, todas nuestras tarjetas de control incluyen garantía de fabricación. Además, nuestro equipo técnico te asesora durante todo el proceso de instalación para asegurar el correcto funcionamiento."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tiempo dura el envío a cualquier parte de México?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Los envíos se realizan en 2-5 días hábiles a cualquier punto de México. Utilizamos embalaje especializado para refacciones electrónicas industriales."
          }
        },
        {
          "@type": "Question",
          "name": "¿Puedo instalar la tarjeta yo mismo o necesito un técnico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si tienes experiencia en electrónica industrial, puedes instalar la tarjeta siguiendo nuestras instrucciones. Si prefieres, nuestro equipo técnico puede orientarte paso a paso por WhatsApp."
          }
        }
      ]
    }
  ]
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
        <link rel="robots" href="/robots.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  )
}
