"use server"

export async function sendContactEmail(prevState: any, formData: FormData) {
  console.log("--- DEBUG: Elenco di tutte le variabili d'ambiente disponibili ---");
  console.log(Object.keys(process.env));
  console.log("-----------------------------------------------------------------");

  console.log("--- Avvio Server Action: sendContactEmail ---")

  const BREVO_API_KEY = process.env.BREVO_API_KEY
  const SENDER_EMAIL = "info@yanngualtieri.com" // Email verificata su Brevo
  const RECIPIENT_EMAIL = "info@yanngualtieri.com" // Dove vuoi ricevere le email

  if (!BREVO_API_KEY) {
    console.error("ERRORE CRITICO: BREVO_API_KEY non trovata nelle variabili d'ambiente di Vercel.")
    return { success: false, message: "Errore di configurazione del server. Contattare l'amministratore." }
  }

  // Raccolta di tutti i dati dal form
  const name = formData.get("name") as string
  const lastName = formData.get("lastName") as string
  const clientEmail = formData.get("email") as string
  const phone = formData.get("phone") as string
  const company = formData.get("company") as string || "Non specificata"
  const sector = formData.get("sector") as string
  const budget = formData.get("budget") as string || "Non specificato"
  const objective = formData.get("objective") as string || "Non specificato"
  const message = formData.get("message") as string || "Nessun messaggio."
  
  const fullName = `${name} ${lastName}`
  const subject = `Nuova richiesta di contatto da ${fullName} per Meta Ads`

  // Creazione del corpo dell'email in HTML
  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="color: #333;">Nuova Richiesta di Consulenza dal Sito</h1>
        <p>Hai ricevuto una nuova richiesta di contatto. Ecco i dettagli:</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nome Completo</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${clientEmail}">${clientEmail}</a></td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Telefono</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Azienda</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Settore</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${sector}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Budget Mensile</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${budget}</td>
          </tr>
          <tr style="background-color: #f2f2f2;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Obiettivo Principale</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${objective}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Messaggio</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #777;">Email inviata automaticamente dal form di contatto su yanngualtieri.com</p>
      </body>
    </html>
  `

  const requestBody = {
    sender: { email: SENDER_EMAIL, name: "Yann Gualtieri | Sito Web" },
    to: [{ email: RECIPIENT_EMAIL, name: "Yann Gualtieri" }],
    replyTo: { email: clientEmail, name: fullName },
    subject: subject,
    htmlContent: htmlContent,
  }

  console.log("Invio richiesta a Brevo con i seguenti dati:", JSON.stringify(requestBody, null, 2))

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(requestBody),
    })

    if (response.ok) {
      const responseBody = await response.json()
      console.log("✅ Richiesta a Brevo INVIATA CON SUCCESSO.", responseBody)
      return {
        success: true,
        message: "Grazie per la tua richiesta! Ti ricontatteremo al più presto.",
      }
    } else {
      const responseBody = await response.json()
      console.error("❌ Errore dall'API di Brevo:", response.status, responseBody)
      return { success: false, message: `Si è verificato un errore. Riprova più tardi.` }
    }
  } catch (error) {
    console.error("💥 Errore di rete o di esecuzione:", error)
    return { success: false, message: "Errore di connessione. Riprova più tardi." }
  }
}

export async function sendModalEmail(prevState: any, formData: FormData) {
  // Unifichiamo tutto a una sola funzione per semplicità
  return sendContactEmail(prevState, formData)
}
