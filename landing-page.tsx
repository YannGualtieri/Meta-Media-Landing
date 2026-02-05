"use client"

import { useState, useRef, useEffect } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Target,
  BarChart3,
  Users,
  CheckCircle,
  Play,
  MessageCircle,
  Calendar,
  Settings,
  Palette,
  Search,
  RotateCcw,
  ChevronDown,
  ExternalLink,
  XCircle,
  AlertCircle,
  TrendingDown,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { sendContactEmail, sendModalEmail } from "./actions/send-contact-email"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation" // Importiamo il nuovo componente

const fadeInUp = "animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 translate-y-8"
const slideInLeft = "animate-[slideInLeft_0.8s_ease-out_forwards] opacity-0 -translate-x-8"
const slideInRight = "animate-[slideInRight_0.8s_ease-out_forwards] opacity-0 translate-x-8"

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalFormRef = useRef<HTMLFormElement>(null)
  const contactFormRef = useRef<HTMLFormElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [modalState, modalAction, isModalPending] = useActionState(sendModalEmail, { success: false, message: "" })
  const [contactState, contactAction, isContactPending] = useActionState(sendContactEmail, {
    success: false,
    message: "",
  })

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Gestione dei messaggi di successo/errore con useEffect
  useEffect(() => {
    if (modalState?.success && modalState.message) {
      alert(modalState.message)
      setIsModalOpen(false)
      modalFormRef.current?.reset()
    } else if (modalState?.message && !modalState.success) {
      alert(modalState.message)
    }
  }, [modalState])

  useEffect(() => {
    if (contactState?.success && contactState.message) {
      alert(contactState.message)
      contactFormRef.current?.reset()
    } else if (contactState?.message && !contactState.success) {
      alert(contactState.message)
    }
  }, [contactState])

  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-x-hidden"
    >
      {/* Modal (lasciamo senza animazioni per ora per non appesantire) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">
              ✕
            </button>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center pr-8">Prenota Consulenza Gratuita</h3>
            <form action={modalAction} className="space-y-4" ref={modalFormRef}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Cognome *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                    placeholder="la-tua-email@esempio.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Telefono *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                    placeholder="+39 123 456 7890"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Azienda</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                    placeholder="Nome della tua azienda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Settore *</label>
                  <select
                    name="sector"
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                  >
                    <option value="">Seleziona il tuo settore</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="servizi-professionali">Servizi Professionali</option>
                    <option value="saas">SaaS/Tech</option>
                    <option value="immobiliare">Immobiliare</option>
                    <option value="formazione">Formazione/Coaching</option>
                    <option value="salute">Salute e Benessere</option>
                    <option value="locale">Business Locale</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Budget Mensile Meta Ads</label>
                  <select
                    name="budget"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                  >
                    <option value="">Seleziona il budget</option>
                    <option value="500-1000">€500 - €1.000</option>
                    <option value="1000-5000">€1.000 - €5.000</option>
                    <option value="5000-10000">€5.000 - €10.000</option>
                    <option value="10000-25000">€10.000 - €25.000</option>
                    <option value="25000+">€25.000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Obiettivo Principale</label>
                  <select
                    name="objective"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm md:text-base"
                  >
                    <option value="">Seleziona l'obiettivo</option>
                    <option value="lead-generation">Generare più lead qualificati</option>
                    <option value="vendite">Aumentare le vendite</option>
                    <option value="roas">Migliorare il ROAS</option>
                    <option value="scaling">Scalare le campagne esistenti</option>
                    <option value="brand">Brand awareness</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Raccontaci del tuo progetto</label>
                <textarea
                  rows={3}
                  name="message"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none text-sm md:text-base"
                  placeholder="Descrivi la tua situazione attuale, gli obiettivi che vuoi raggiungere e le sfide che stai affrontando con Meta Ads..."
                ></textarea>
              </div>

              <div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="modal-privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="modal-privacy" className="text-sm text-gray-300">
                    Accetto il trattamento dei dati personali secondo la{" "}
                    <a
                      href="https://www.iubenda.com/privacy-policy/4179849"
                      className="text-blue-400 hover:text-blue-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>{" "}
                    e acconsento a essere contattato per ricevere informazioni sui servizi.
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isModalPending}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 py-2 md:py-3 w-full text-sm md:text-base"
              >
                {isModalPending ? (
                  "Invio..."
                ) : (
                  <>
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Prenota Consulenza
                  </>
                )}
              </Button>
              {modalState && modalState.message && (
                <p className={`text-center text-sm mt-2 ${modalState.success ? "text-green-400" : "text-red-400"}`}>
                  {modalState.message}
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* header */}
      <header className="border-b border-gray-800/50 backdrop-blur-sm sticky top-0 z-40 bg-slate-900/95">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <Link href="#top" className="flex items-center space-x-2 cursor-pointer min-w-0 flex-shrink-0">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-base md:text-lg lg:text-xl font-bold truncate">Yann Gualtieri</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#chi-sono" className="text-gray-300 hover:text-white transition-colors">
              Chi Sono
            </Link>
            <Link href="#cosa-faccio" className="text-gray-300 hover:text-white transition-colors">
              Cosa Faccio
            </Link>
            <Link href="#come-lavoro" className="text-gray-300 hover:text-white transition-colors">
              Come Lavoro
            </Link>
            <Link href="#contatti" className="text-gray-300 hover:text-white transition-colors">
              Contatti
            </Link>
          </nav>

          <Button
            onClick={openModal}
            className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Parliamone (è gratis)
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-slate-900/98 backdrop-blur-sm`}
        >
          <nav className="px-4 py-4 space-y-4">
            <Link
              href="#chi-sono"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chi Sono
            </Link>
            <Link
              href="#cosa-faccio"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cosa Faccio
            </Link>
            <Link
              href="#come-lavoro"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Come Lavoro
            </Link>
            <Link
              href="#contatti"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contatti
            </Link>
            <Button
              onClick={() => {
                openModal()
                setIsMobileMenuOpen(false)
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-4"
            >
              Parliamone (è gratis)
            </Button>
          </nav>
        </div>
      </header>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl max-w-full px-4">
          <ScrollAnimation animationClassName="animate-fadeInUp">
            <Badge className="mb-4 md:mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 text-xs md:text-sm">
              Media Buyer & Consulente Meta per PMI e attività locali
            </Badge>
          </ScrollAnimation>
          <ScrollAnimation animationClassName="animate-fadeInUp" delay={100}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight mb-4 md:mb-6">
              Campagne Meta Ads che portano{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                clienti veri
              </span>{" "}
              (non solo like)
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animationClassName="animate-fadeInUp" delay={200}>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-2 max-w-3xl mx-auto">
              Parlo italiano, non adverish. Trasformo il tuo budget pubblicitario in risultati concreti per la tua
              attività.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animationClassName="animate-fadeInUp" delay={300}>
            <div className="flex flex-col gap-4 justify-center items-center mb-8 md:mb-12 px-4">
              <Button
                onClick={openModal}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Parliamone (è gratis)
              </Button>
              <Link href="#come-lavoro">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-transparent"
                >
                  <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Scopri Come Lavoro
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animationClassName="animate-fadeInUp" delay={400}>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 text-center px-2">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-xl">Niente contratti vincolanti</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-xl">Risultati misurabili</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-xl">Consulenza gratuita</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animationClassName="animate-fadeInUp" className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Ti ritrovi in questa situazione?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Se almeno una di queste ti suona familiare, posso aiutarti
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={0}>
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-red-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                        Hai provato a fare pubblicità su Meta ma hai solo bruciato budget
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Tanti click, tante impression, ma zero clienti veri. Il tuo portafoglio piange e tu non capisci
                        dove stai sbagliando.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={100}>
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-orange-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                        Non hai tempo (o voglia) di diventare un esperto di advertising
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Hai un'attività da mandare avanti. Non puoi passare ore a studiare algoritmi, pixel e strategie
                        di targeting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={200}>
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-yellow-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                        Le tue campagne funzionavano, ma ora non più
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Meta cambia le regole del gioco ogni due mesi. Quello che funzionava ieri oggi non porta più
                        risultati.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={300}>
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-purple-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                        Vuoi investire in pubblicità ma non sai da dove iniziare
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Hai il budget, hai il prodotto/servizio, ma ti manca una strategia chiara per trasformare gli
                        euro in clienti.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollAnimation animationClassName="animate-fadeInUp" className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Ultimo Risultato</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">Centro Pilates a Milano</p>
          </ScrollAnimation>

          <ScrollAnimation animationClassName="animate-fadeInUp" delay={100}>
            <Link href="https://v0-caso-studio-bloom-html.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer group">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Bloom Pilates Studio</h3>
                    <ExternalLink className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">14:1</div>
                      <div className="text-gray-300 text-sm">ROAS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
                      <div className="text-gray-300 text-sm">Nuovi Clienti</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">€1.200</div>
                      <div className="text-gray-300 text-sm">Budget Speso</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">€17k+</div>
                      <div className="text-gray-300 text-sm">Fatturato Generato</div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed">
                    Da zero a 50+ nuovi clienti in 60 giorni con campagne Meta ottimizzate per la lead generation
                    locale.
                  </p>

                  <div className="mt-6 text-center">
                    <span className="text-blue-400 group-hover:text-blue-300 font-semibold inline-flex items-center gap-2">
                      Leggi il caso studio completo
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <section id="chi-sono" className="py-12 md:py-20 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <ScrollAnimation animationClassName="animate-slideInLeft" className="w-full max-w-sm mx-auto md:max-w-none">
              <Image
                src="/yann-gualtieri.jpg"
                alt="Yann Gualtieri, Media Buyer e Consulente Meta Ads"
                width={500}
                height={625}
                className="rounded-2xl object-cover shadow-2xl shadow-blue-500/10"
                priority
              />
            </ScrollAnimation>
            <ScrollAnimation animationClassName="animate-slideInRight" className="text-center md:text-left">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Chi Sono</h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-4 md:mb-6">Yann Gualtieri, Media Buyer</p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                  Lavoro con PMI e attività locali che vogliono usare Meta Ads per crescere, senza buttare soldi in
                  campagne che non funzionano.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                  Non ti vendo sogni o formule magiche. Ti aiuto a costruire campagne che portano clienti veri, con un
                  approccio diretto e risultati misurabili.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Se cerchi qualcuno che parli la tua lingua (e non solo "adverish"), che ti spieghi le cose in modo
                  chiaro e che lavori per farti guadagnare, sono la persona giusta.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animationClassName="animate-fadeInUp" className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Perché lavorare con me:</h3>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={0}>
              <div className="flex items-start space-x-4 p-4 md:p-6 bg-gray-800/50 rounded-lg border border-gray-600/50 h-full">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 text-white">Niente fuffa</h4>
                  <p className="text-gray-200 text-sm md:text-sm leading-relaxed">
                    Ti dico le cose come stanno. Se qualcosa non funziona, te lo dico subito e troviamo una soluzione.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={100}>
              <div className="flex items-start space-x-4 p-4 md:p-6 bg-gray-800/50 rounded-lg border border-gray-600/50 h-full">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 text-white">Lavori direttamente con me</h4>
                  <p className="text-gray-200 text-sm md:text-sm leading-relaxed">
                    Non passo il tuo progetto a junior o assistenti. Seguo personalmente ogni campagna.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={200}>
              <div className="flex items-start space-x-4 p-4 md:p-6 bg-gray-800/50 rounded-lg border border-gray-600/50 h-full">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 text-white">Focus sui risultati</h4>
                  <p className="text-gray-200 text-sm md:text-sm leading-relaxed">
                    Mi interessa una cosa sola: che le tue campagne portino clienti e fatturato. Il resto è contorno.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={300}>
              <div className="flex items-start space-x-4 p-4 md:p-6 bg-gray-800/50 rounded-lg border border-gray-600/50 h-full">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 text-white">Sempre aggiornato</h4>
                  <p className="text-gray-200 text-sm md:text-sm leading-relaxed">
                    Meta cambia continuamente. Io studio, testo e mi aggiorno per far funzionare le tue campagne.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="cosa-faccio" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <ScrollAnimation animationClassName="animate-fadeInUp" className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Cosa Faccio (in parole semplici)
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
              Niente termini complicati. Ecco cosa posso fare per te
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={0}>
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50 backdrop-blur-sm hover-lift h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">
                    Creo e gestisco le tue campagne
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    Dalla strategia al lancio, fino all'ottimizzazione continua. Tu ti concentri sulla tua attività, io
                    mi occupo di portarti clienti.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={100}>
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50 backdrop-blur-sm hover-lift h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Analizzo cosa non funziona</h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    Se hai già campagne attive ma non portano risultati, le analizzo e ti dico esattamente dove stai
                    perdendo soldi (e come recuperarli).
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={200}>
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50 backdrop-blur-sm hover-lift h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">
                    Ottimizzo per farti spendere meno
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    Testo, analizzo i dati e aggiusto le campagne per abbassare i costi e aumentare i risultati. Ogni
                    euro deve lavorare per te.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={300}>
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50 backdrop-blur-sm hover-lift h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Configuro tutto da zero</h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    Pixel, Business Manager, tracciamenti. Se parti da zero, ti aiuto a impostare tutto nel modo giusto.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={400}>
              <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50 backdrop-blur-sm md:col-span-2 lg:col-span-1 hover-lift h-full">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Ti aiuto con le creatività</h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    Non creo grafiche, ma ti dico cosa funziona e cosa no. Ti guido nella scelta delle immagini, dei
                    video e dei testi che convertono.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="come-lavoro" className="py-12 md:py-20 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto">
          <ScrollAnimation animationClassName="animate-fadeInUp" className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Come Lavoro</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Niente processi complicati. Ecco come funziona
            </p>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={0}>
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Ci conosciamo (gratis)</h3>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Facciamo una call di 30 minuti. Mi racconti la tua situazione, i tuoi obiettivi e cosa hai già
                        provato. Ti dico subito se e come posso aiutarti.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={100}>
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Studio il tuo business</h3>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Analizzo il tuo mercato, i tuoi competitor e il tuo pubblico. Capisco cosa funziona e cosa no, e
                        costruisco una strategia su misura.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={200}>
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Lancio le campagne</h3>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Imposto tutto (pixel, tracciamenti, campagne) e partiamo. Niente attese infinite, si inizia a
                        lavorare subito.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={300}>
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Monitoro e ottimizzo</h3>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Controllo i risultati ogni giorno. Testo nuove creatività, aggiusto il targeting, elimino ciò
                        che non funziona. L'obiettivo è migliorare sempre.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={400}>
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Ti tengo aggiornato</h3>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Ricevi report chiari (senza paroloni tecnici) con i risultati e le azioni che sto facendo. Sai
                        sempre dove vanno i tuoi soldi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollAnimation animationClassName="animate-fadeInUp" className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Domande Frequenti</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
              Le risposte che cercavi (senza giri di parole)
            </p>
          </ScrollAnimation>

          <div className="space-y-4">
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={0}>
              <FAQItem
                question="Quanto costa?"
                answer="Dipende dal progetto. Lavoro con fee mensile fissa o percentuale sul budget pubblicitario. Dopo la call gratuita ti faccio una proposta chiara e trasparente."
              />
            </ScrollAnimation>
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={100}>
              <FAQItem
                question="Quanto tempo ci vuole per vedere risultati?"
                answer="I primi dati arrivano in 7-14 giorni. Per ottimizzare davvero le campagne servono 30-60 giorni. Chi ti promette risultati immediati ti sta prendendo in giro."
              />
            </ScrollAnimation>
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={200}>
              <FAQItem
                question="Devo firmare un contratto lungo?"
                answer="No. Niente vincoli assurdi. Se non sei soddisfatto, puoi interrompere con 15 giorni di preavviso."
              />
            </ScrollAnimation>
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={300}>
              <FAQItem
                question="Lavori anche con budget piccoli?"
                answer="Sì, se il progetto ha senso. Anche con budget ridotti si possono ottenere risultati, basta avere aspettative realistiche e una strategia chiara."
              />
            </ScrollAnimation>
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={400}>
              <FAQItem
                question="Mi fai anche le grafiche?"
                answer="No, non sono un grafico. Ma ti dico esattamente cosa serve per far funzionare le tue campagne e ti guido nella scelta delle creatività giuste."
              />
            </ScrollAnimation>
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={500}>
              <FAQItem
                question="Come faccio a sapere se le campagne stanno funzionando?"
                answer="Ti mando report chiari con i numeri che contano: quanti clienti arrivano, quanto spendi per acquisirli, quanto fatturi. Niente metriche inutili."
              />
            </ScrollAnimation>
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={600}>
              <FAQItem
                question="Lavori solo con Meta Ads?"
                answer="Sì, mi concentro su Facebook e Instagram perché è quello che so fare meglio. Preferisco essere un esperto in una cosa piuttosto che mediocre in tante."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="cta" className="py-12 md:py-20 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animationClassName="animate-fadeInUp">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
                Pronto a smettere di{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  bruciare budget
                </span>{" "}
                e iniziare a portare clienti?
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={100}>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-4">
                Prenota una call gratuita di 30 minuti. Niente impegni, niente vendite aggressive.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={200}>
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 md:p-8 mb-6 md:mb-8 border border-gray-700/50">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 px-2">Nella call parliamo di:</h3>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">La tua situazione attuale</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">Cosa non sta funzionando</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">Come posso aiutarti</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">I prossimi passi concreti</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationClassName="animate-fadeInUp" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={openModal}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-lg px-8 py-4"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Parliamone (è gratis)
                </Button>
                <Link
                  href="https://wa.me/393408686107?text=Ciao,%20vorrei%20una%20valutazione%20preliminare%20del%20mio%20progetto"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-4 bg-transparent"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Scrivimi su WhatsApp
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contatti" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <ScrollAnimation animationClassName="animate-fadeInUp">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
                Inizia il tuo{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  percorso di crescita
                </span>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animationClassName="animate-fadeInUp" delay={100}>
              <p className="text-lg md:text-xl text-gray-300 px-4">
                Compila il form e verrai ricontattato/a entro 24 ore
              </p>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animationClassName="animate-fadeInUp" delay={200}>
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-4 md:p-8">
                <form action={contactAction} className="space-y-6" ref={contactFormRef}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Cognome *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="Il tuo cognome"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="la-tua-email@esempio.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Telefono *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="+39 123 456 7890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Azienda</label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        placeholder="Nome della tua azienda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Settore *</label>
                      <select
                        name="sector"
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="">Seleziona il tuo settore</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="lead-generation">Lead Generation</option>
                        <option value="servizi-professionali">Servizi Professionali</option>
                        <option value="saas">SaaS/Tech</option>
                        <option value="immobiliare">Immobiliare</option>
                        <option value="formazione">Formazione/Coaching</option>
                        <option value="salute">Salute e Benessere</option>
                        <option value="locale">Business Locale</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Budget Mensile Meta Ads</label>
                      <select
                        name="budget"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="">Seleziona il budget</option>
                        <option value="500-1000">€500 - €1.000</option>
                        <option value="1000-5000">€1.000 - €5.000</option>
                        <option value="5000-10000">€5.000 - €10.000</option>
                        <option value="10000-25000">€10.000 - €25.000</option>
                        <option value="25000+">€25.000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Obiettivo Principale</label>
                      <select
                        name="objective"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="">Seleziona l'obiettivo</option>
                        <option value="lead-generation">Generare più lead qualificati</option>
                        <option value="vendite">Aumentare le vendite</option>
                        <option value="roas">Migliorare il ROAS</option>
                        <option value="scaling">Scalare le campagne esistenti</option>
                        <option value="brand">Brand awareness</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Raccontaci del tuo progetto</label>
                    <textarea
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                      placeholder="Descrivi la tua situazione attuale, gli obiettivi che vuoi raggiungere e le sfide che stai affrontando con Meta Ads..."
                    ></textarea>
                  </div>

                  <div>
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="mt-1 w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 flex-shrink-0"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-300">
                        Accetto il trattamento dei dati personali secondo la{" "}
                        <a
                          href="https://www.iubenda.com/privacy-policy/4179849"
                          className="text-blue-400 hover:text-blue-300 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </a>{" "}
                        e acconsento a essere contattato per ricevere informazioni sui servizi.
                      </label>
                    </div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      disabled={isContactPending}
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-4"
                    >
                      {isContactPending ? (
                        "Invio Richiesta..."
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-2" /> Invia Richiesta e Prenota Consulenza
                        </>
                      )}
                    </Button>
                    <p className="text-center text-sm text-gray-400 mt-3">
                      Ti ricontatteremo entro 24 ore per fissare la tua consulenza gratuita
                    </p>
                    {contactState && contactState.message && (
                      <p
                        className={`text-center text-sm mt-2 ${contactState.success ? "text-green-400" : "text-red-400"}`}
                      >
                        {contactState.message}
                      </p>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer id="contatti" className="border-t border-gray-800/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Yann Gualtieri</span>
              </div>
              <p className="text-gray-400 mb-4">Media Buyer & Consulente Meta specializzato in Lead Generation</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contatti</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: yanngualtieri@gmail.com</li>
                <li>WhatsApp: +39 340 868 6107</li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/yann-gualtieri-86b050226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Yann Gualtieri
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-400">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
              <a
                href="https://www.iubenda.com/privacy-policy/4179849"
                className="text-blue-400 hover:text-blue-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.iubenda.com/privacy-policy/4179849/cookie-policy"
                className="text-blue-400 hover:text-blue-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookie Policy
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Yann Gualtieri. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-600/50 backdrop-blur-sm hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <CardContent className="p-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
          <ChevronDown
            className={`w-5 h-5 text-gray-300 transition-transform duration-300 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6">
            <p className="text-gray-200 leading-relaxed">{answer}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
;<style jsx global>{`
@keyframes fadeInUp {
from {
  opacity: 0;
  transform: translateY(30px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}

@keyframes slideInLeft {
from {
  opacity: 0;
  transform: translateX(-30px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
}

@keyframes slideInRight {
from {
  opacity: 0;
  transform: translateX(30px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
}

.hover-lift {
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
transform: translateY(-5px);
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
`}</style>
