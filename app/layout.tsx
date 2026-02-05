import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import IubendaScripts from "../components/iubenda-scripts"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yann Gualtieri - Media Buyer & Consulente Meta Ads",
  description:
    "Campagne Meta ottimizzate per generare lead qualificati e aumentare le vendite. Specializzato in Facebook e Instagram Ads con approccio data-driven.",
  metadataBase: new URL("https://www.yanngualtieri.com"), // Sostituisci con il tuo dominio finale
  openGraph: {
    title: "Yann Gualtieri - Media Buyer & Consulente Meta Ads",
    description: "Trasformo il tuo budget pubblicitario in crescita reale con campagne Meta Ads performanti.",
    url: "https://www.yanngualtieri.com", // Sostituisci con il tuo dominio finale
    siteName: "Yann Gualtieri",
    images: [
      {
        url: "/yann-gualtieri.jpg", // L'immagine che abbiamo già
        width: 500,
        height: 625, // Modificato
        alt: "Foto di Yann Gualtieri, Media Buyer",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yann Gualtieri - Media Buyer & Consulente Meta Ads",
    description: "Campagne Meta ottimizzate per generare lead qualificati e aumentare le vendite.",
    images: ["/yann-gualtieri.jpg"], // Twitter userà le dimensioni di openGraph
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yann Gualtieri",
              url: "https://www.yanngualtieri.com",
              image: "https://www.yanngualtieri.com/yann-gualtieri.jpg",
              jobTitle: "Media Buyer",
              knowsAbout: ["Meta Ads", "Facebook Ads", "Instagram Ads", "Lead Generation", "E-commerce Advertising"],
              sameAs: ["https://www.linkedin.com/in/yann-gualtieri-86b050226/"],
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Consulenza e Gestione Campagne Meta Ads",
                  serviceType: "Marketing a pagamento",
                  provider: {
                    "@type": "Person",
                    name: "Yann Gualtieri",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "IT",
                  },
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <IubendaScripts />
        {children}
      </body>
    </html>
  )
}
