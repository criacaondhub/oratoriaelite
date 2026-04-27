import { lazy, Suspense } from "react"
import Hero from "../components/sections/Hero"
import Method from "../components/sections/Method"
import Pandemic from "../components/sections/Pandemic"
import ForWhom from "../components/sections/ForWhom"
import Modules from "../components/sections/Modules"
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
                <Method />
                <Pandemic />
                <ForWhom />
                <Modules />
                <BonusOferta />
                
                <Suspense fallback={<div className="min-h-[200px]" />}>
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
