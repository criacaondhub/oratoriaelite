
import Hero from "../components/sections/Hero"
import Method from "../components/sections/Method"
import Pandemic from "../components/sections/Pandemic"
import ForWhom from "../components/sections/ForWhom"
import Modules from "../components/sections/Modules"
import Bonus from "../components/sections/Bonus"
import Testimonials from "../components/sections/Testimonials"
import Guarantee from "../components/sections/Guarantee"
import Pricing from "../components/sections/Pricing"
import About from "../components/sections/About"
import FAQ from "../components/sections/FAQ"
import FloatingWhatsApp from "../components/FloatingWhatsApp"
import Footer from "../components/sections/Footer"


function HomePage() {
    return (
        <main className="relative min-h-screen bg-transparent">

            <div className="relative z-10">
                <Hero />
                <Method />
                <Pandemic />
                <ForWhom />
                <Modules />
                <Bonus />
                <Testimonials />
                <Guarantee />
                <Pricing />
                <About />
                <FAQ pricingAnswer="12x de 52,93 no cartão de crédito ou 497,00 à vista com desconto. Lembrando que este preço é promocional e poderá ser alterado a qualquer momento." />

                <FloatingWhatsApp />
                <Footer />
            </div>
        </main>
    )
}

export default HomePage
