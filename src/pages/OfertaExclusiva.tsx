import { lazy, Suspense } from "react"
import Hero from "../components/sections/Hero"
const Method = lazy(() => import("../components/sections/Method"))
const Pandemic = lazy(() => import("../components/sections/Pandemic"))
const ForWhom = lazy(() => import("../components/sections/ForWhom"))
const Modules = lazy(() => import("../components/sections/Modules"))
import BonusOferta from "../components/sections/BonusOferta"

const Testimonials = lazy(() => import("../components/sections/Testimonials"))
const Guarantee = lazy(() => import("../components/sections/Guarantee"))
const PricingOferta = lazy(() => import("../components/sections/PricingOferta"))
const About = lazy(() => import("../components/sections/About"))
const FAQ = lazy(() => import("../components/sections/FAQ"))
const FloatingWhatsApp = lazy(() => import("../components/FloatingWhatsApp"))
const Footer = lazy(() => import("../components/sections/Footer"))


function OfertaExclusiva() {
    return (
        <main className="relative min-h-screen bg-transparent">

            <div className="relative z-10">
                <Hero />
                <Suspense fallback={<div className="min-h-[200px]" />}>
                    <Method />
                    <Pandemic />
                    <ForWhom />
                    <Modules />
                    <BonusOferta />
                    <Testimonials />
                    <Guarantee />
                    <PricingOferta />
                    <About />
                    <FAQ />
                    <FloatingWhatsApp />
                    <Footer />
                </Suspense>
            </div>
        </main>
    )
}

export default OfertaExclusiva
