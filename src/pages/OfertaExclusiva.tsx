
import Hero from "../components/sections/Hero"
import Method from "../components/sections/Method"
import Pandemic from "../components/sections/Pandemic"
import ForWhom from "../components/sections/ForWhom"
import Modules from "../components/sections/Modules"
import BonusOferta from "../components/sections/BonusOferta"
import Testimonials from "../components/sections/Testimonials"
import Guarantee from "../components/sections/Guarantee"
import PricingOferta from "../components/sections/PricingOferta"
import About from "../components/sections/About"
import FAQ from "../components/sections/FAQ"
import FloatingWhatsApp from "../components/FloatingWhatsApp"
import Footer from "../components/sections/Footer"


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
                <Testimonials />
                <Guarantee />
                <PricingOferta />
                <About />
                <FAQ />

                <FloatingWhatsApp />
                <Footer />
            </div>
        </main>
    )
}

export default OfertaExclusiva
