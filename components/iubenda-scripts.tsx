"use client"

import { useEffect } from "react"

export default function IubendaScripts() {
  useEffect(() => {
    // Configurazione Iubenda
    if (typeof window !== "undefined") {
      ;(window as any)._iub = (window as any)._iub || []
      ;(window as any)._iub.csConfiguration = {
        siteId: 4179849,
        cookiePolicyId: 48677040,
        lang: "it",
        storage: {
          useSiteId: true,
        },
      }

      // Carica gli script
      const scripts = [
        "https://cs.iubenda.com/autoblocking/4179849.js",
        "//cdn.iubenda.com/cs/gpp/stub.js",
        "//cdn.iubenda.com/cs/iubenda_cs.js",
      ]

      scripts.forEach((src, index) => {
        const script = document.createElement("script")
        script.src = src
        script.async = true
        if (index === scripts.length - 1) {
          script.charset = "UTF-8"
        }
        document.head.appendChild(script)
      })
    }
  }, [])

  return null
}
