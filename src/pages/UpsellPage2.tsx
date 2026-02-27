import UpsellHero2 from "../components/sections/UpsellHero2"
import UpsellMethod2 from "../components/sections/UpsellMethod2"
import UpsellForWhom from "../components/sections/UpsellForWhom"
import UpsellModules from "../components/sections/UpsellModules"
import UpsellBonus2 from "../components/sections/UpsellBonus2"
import Testimonials from "../components/sections/Testimonials"
import Guarantee from "../components/sections/Guarantee"
import UpsellPricing2 from "../components/sections/UpsellPricing2"
import About from "../components/sections/About"
import FAQ from "../components/sections/FAQ"
import FloatingWhatsApp from "../components/FloatingWhatsApp"
import Footer from "../components/sections/Footer"
import LiquidEther from "../components/ui/LiquidEther"

function UpsellPage2() {
    return (
        <main className="relative min-h-screen bg-transparent">
            {/* Background Liquid Effect - Page Wide, Desktop Only */}
            <div className="hidden lg:block fixed inset-0 z-0 pointer-events-none">
                <LiquidEther
                    colors={['#e31c1c', '#761414', '#cc0000']}
                    mouseForce={40}
                    cursorSize={100}
                    isViscous={true}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            <div className="relative z-10">
                <UpsellHero2 />
                <UpsellMethod2 />
                <UpsellForWhom />
                <UpsellModules />
                <UpsellBonus2 />
                <Testimonials />
                <Guarantee />
                <UpsellPricing2 />
                <About />
                <FAQ />

                <FloatingWhatsApp />
                <Footer />
            </div>
        </main>
    )
}

export default UpsellPage2
