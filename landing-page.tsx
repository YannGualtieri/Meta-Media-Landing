"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Zap,
  CheckCircle,
  Play,
  MessageCircle,
  Calendar,
  Award,
  Settings,
  Palette,
  Search,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center">Prenota Consulenza Gratuita</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="la-tua-email@esempio.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Telefono *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="+39 123 456 7890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tipo di Business</label>
                <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
                  <option value="">Seleziona il tuo settore</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="lead-generation">Lead Generation</option>
                  <option value="servizi">Servizi Professionali</option>
                  <option value="altro">Altro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Budget Mensile Meta Ads</label>
                <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
                  <option value="">Seleziona il budget</option>
                  <option value="1000-5000">€1.000 - €5.000</option>
                  <option value="5000-10000">€5.000 - €10.000</option>
                  <option value="10000-25000">€10.000 - €25.000</option>
                  <option value="25000+">€25.000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Messaggio</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                  placeholder="Raccontaci del tuo progetto..."
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Prenota Consulenza
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* header */}
      <header className="border-b border-gray-800/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#top" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Yann Gualtieri</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#chi-sono" className="text-gray-300 hover:text-white transition-colors">
              Chi Sono
            </Link>
            <Link href="#servizi" className="text-gray-300 hover:text-white transition-colors">
              Servizi
            </Link>
            <Link href="#processo" className="text-gray-300 hover:text-white transition-colors">
              Processo
            </Link>
            <Link href="#contatti" className="text-gray-300 hover:text-white transition-colors">
              Contatti
            </Link>
          </nav>
          <Button
            onClick={openModal}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Consulenza Gratuita
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30">
            ✨ Media Buyer & Consulente Meta specializzato in Lead Generation
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight mb-6 md:text-7xl">
            Campagne Meta ottimizzate per{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              generare lead qualificati
            </span>{" "}
            e aumentare le vendite
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Porto il tuo business al livello successivo attraverso strategie data-driven e ottimizzazioni continue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={openModal}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Prenota Consulenza Gratuita
            </Button>
            <Link href="#processo">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-4 bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Scopri il Processo
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300 text-xl">Certificato Meta Blueprint</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-gray-300 text-xl">Specializzato in e-commerce e lead generation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <span className="text-gray-300 text-xl">Oltre €500k di ad spend gestito con successo</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-gray-300 text-xl">Esperienza in +15 Settori</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Sono Section */}
      <section id="chi-sono" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Chi Sono</h2>
            <p className="text-2xl text-gray-300 mb-8">Il tuo partner strategico per la crescita digitale</p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Sono un Media Buyer e Consulente Meta con anni di esperienza nel trasformare investimenti pubblicitari in
              crescita concreta per i business. La mia formazione continua e l'approccio strategico mi permettono di
              navigare con successo nel panorama in costante evoluzione dell'advertising digitale.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Cosa mi distingue:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">Approccio data-driven</h4>
                <p className="text-gray-300 text-sm">Ogni decisione è supportata da analisi approfondite</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCcw className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">Aggiornamento continuo</h4>
                <p className="text-gray-300 text-sm">Sempre al passo con le ultime novità e best practice Meta</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">Focus sui risultati</h4>
                <p className="text-gray-300 text-sm">Il mio successo si misura con la crescita del tuo business</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">Accesso diretto</h4>
                <p className="text-gray-300 text-sm">Lavori direttamente con me, non con junior o intermediari</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servizi" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Servizi</h2>
            <p className="text-2xl text-gray-300 max-w-2xl mx-auto">Campagne Meta che generano risultati misurabili</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">🎯 Gestione Campagne Meta Ads</h3>
                <p className="text-gray-300 mb-6">
                  Progettazione, lancio e ottimizzazione di campagne Facebook e Instagram per massimizzare ROAS e
                  conversioni. Dalla definizione del target all'analisi delle performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">📊 Audit e Consulenza Strategica</h3>
                <p className="text-gray-300 mb-6">
                  Analisi approfondita dei tuoi account pubblicitari attuali, identificazione delle opportunità di
                  miglioramento e sviluppo di strategie personalizzate.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">🔧 Ottimizzazione Continua</h3>
                <p className="text-gray-300 mb-6">
                  Monitoraggio costante delle performance, test A/B sistematici e aggiustamenti strategici per garantire
                  risultati sempre migliori.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">📈 Setup e Configurazione</h3>
                <p className="text-gray-300 mb-6">
                  Configurazione professionale di Pixel, Business Manager e tutti gli strumenti necessari per campagne
                  di successo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">🎨 Consulenza Creativa</h3>
                <p className="text-gray-300 mb-6">
                  Supporto nella definizione di concept creativi vincenti e ottimizzazione delle creative per
                  massimizzare engagement e conversioni.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section id="processo" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Processo</h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Come lavoriamo insieme: il metodo che porta risultati
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Analisi e Audit Iniziale</h3>
                    <p className="text-gray-300 text-lg">
                      Valutazione della situazione attuale: analizziamo le tue campagne in relazione con i tuoi
                      obiettivi e necessità di business per partire da una base stabile.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Strategia Personalizzata</h3>
                    <p className="text-gray-300 text-lg">
                      Sviluppo di una strategia su misura basata sui tuoi obiettivi: definizione target, allocazione del
                      budget, funnel di conversione e KPI da tracciare.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Setup e Configurazione</h3>
                    <p className="text-gray-300 text-lg">
                      Configurazione tecnica di tutti gli strumenti necessari: Business Manager e Pixel
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Lancio e Monitoraggio</h3>
                    <p className="text-gray-300 text-lg">
                      Lancio delle campagne con monitoraggio settimanale delle performance e primi aggiustamenti basati
                      sui dati iniziali.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Ottimizzazione Continua</h3>
                    <p className="text-gray-300 text-lg">
                      Test A/B sistematici, analisi delle performance, scaling delle campagne vincenti e ottimizzazioni
                      continue per massimizzare il ROAS.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r ffrom-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Reporting e Crescita</h3>
                    <p className="text-gray-300 text-lg">
                      Report dettagliati con insights strategici, raccomandazioni per il futuro e pianificazione della
                      crescita a lungo termine.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perché Scegliermi Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Perché Scegliermi</h2>
            <p className="text-2xl text-gray-300 max-w-2xl mx-auto">Il partner giusto per la tua crescita digitale</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-700/30">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-blue-400">🎯 Expertise Comprovata</h3>
                <p className="text-gray-100">
                  Certificato Meta Blueprint con esperienza diretta nella gestione di campagne per diversi settori:
                  e-commerce, lead generation e servizi professionali.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-700/30">
              <CardContent className="p-8">
                <BarChart3 className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-violet-400">📊 Approccio Data-Driven</h3>
                <p className="text-gray-100">
                  Ogni strategia è basata su dati concreti e analisi approfondite. Non lavoro per tentativi, ma con
                  metodologie testate e processi strutturati.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-700/30">
              <CardContent className="p-8">
                <RotateCcw className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-400">🔄 Aggiornamento Continuo</h3>
                <p className="text-gray-100">
                  Il mondo Meta cambia rapidamente. Resto sempre aggiornato su algoritmi, best practice e nuove
                  funzionalità per garantirti sempre il massimo vantaggio competitivo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border-orange-700/30">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-orange-400">💬 Comunicazione Trasparente</h3>
                <p className="text-gray-100">
                  Report chiari e comunicazione costante. Sarai informato su performance, strategie e prossimi passi.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-700/30">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-red-400">⚡ Risultati Misurabili</h3>
                <p className="text-gray-100">
                  Il mio successo si misura con la crescita del tuo business. Focus totale su ROI, ROAS e obiettivi
                  concreti che impattano direttamente sui tuoi ricavi.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-900/20 to-teal-800/20 border-teal-700/30">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-teal-400">🤝 Accesso Diretto</h3>
                <p className="text-gray-100">
                  Lavori direttamente con me, non con account manager junior. Esperienza, competenza e attenzione
                  personalizzata per il tuo progetto.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/20 border-indigo-700/30 md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-indigo-400">🚀 Scalabilità</h3>
                <p className="text-gray-100">
                  Strategie pensate per crescere nel tempo. Non solo campagne che funzionano oggi, ma sistemi scalabili
                  per supportare la crescita futura del tuo business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Pronto a{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                trasformare
              </span>{" "}
              il tuo investimento pubblicitario in crescita reale?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Non lasciare che il tuo budget si disperda in campagne inefficaci.
            </p>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 mb-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6">
                Prenota una consulenza strategica gratuita di 30 minuti dove analizzeremo insieme:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">La situazione attuale delle tue campagne</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Le opportunità immediate di miglioramento</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Una strategia personalizzata per i tuoi obiettivi</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">I primi passi concreti verso risultati migliori</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={openModal}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Prenota la Tua Consulenza Gratuita
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
                  Scrivimi per una Valutazione
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inizia il tuo{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                percorso di crescita
              </span>
            </h2>
            <p className="text-xl text-gray-300">Compila il form e verrai ricontattato/a entro 24 ore</p>
          </div>

          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Cognome *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Il tuo cognome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="la-tua-email@esempio.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Telefono *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Azienda</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Nome della tua azienda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Settore *</label>
                  <select
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
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Budget Mensile Meta Ads</label>
                  <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
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
                  <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
                    <option value="">Seleziona l'obiettivo</option>
                    <option value="lead-generation">Generare più lead qualificati</option>
                    <option value="vendite">Aumentare le vendite</option>
                    <option value="roas">Migliorare il ROAS</option>
                    <option value="scaling">Scalare le campagne esistenti</option>
                    <option value="brand">Brand awareness</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Raccontaci del tuo progetto</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                    placeholder="Descrivi la tua situazione attuale, gli obiettivi che vuoi raggiungere e le sfide che stai affrontando con Meta Ads..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-300">
                      Accetto il trattamento dei dati personali secondo la{" "}
                      <Link href="#" className="text-blue-400 hover:text-blue-300 underline">
                        Privacy Policy
                      </Link>{" "}
                      e acconsento a essere contattato per ricevere informazioni sui servizi.
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-4"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Invia Richiesta e Prenota Consulenza
                  </Button>
                  <p className="text-center text-sm text-gray-400 mt-3">
                    Ti ricontatteremo entro 24 ore per fissare la tua consulenza gratuita
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
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
                <li>LinkedIn: Yann Gualtieri</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Yann Gualtieri. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
