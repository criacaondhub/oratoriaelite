import { Suspense, lazy } from 'react'
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

const LiquidEther = lazy(() => import("../components/ui/LiquidEther"))

function HomePage() {
    return (
        <main className="relative min-h-screen bg-transparent">
            {/* Background Liquid Effect - Page Wide, Desktop Only */}
            <div className="hidden lg:block fixed inset-0 z-0 pointer-events-none">
                <Suspense fallback={null}>
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
                </Suspense>
            </div>

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
                <FAQ />

                <FloatingWhatsApp />
                <Footer />
            </div>
        </main>
    )
}

export default HomePage
