import LastNoticeHero from "../components/sections/LastNoticeHero"
import LastNoticeMethod from "../components/sections/LastNoticeMethod"
import LastNoticeBonus from "../components/sections/LastNoticeBonus"
import LastNoticePricing from "../components/sections/LastNoticePricing"
import Footer from "../components/sections/Footer"
import LiquidEther from "../components/ui/LiquidEther"

function LastNoticePage() {
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
                <LastNoticeHero />
                <LastNoticeMethod />
                <LastNoticeBonus />
                <LastNoticePricing />
                <Footer />
            </div>
        </main>
    )
}

export default LastNoticePage
