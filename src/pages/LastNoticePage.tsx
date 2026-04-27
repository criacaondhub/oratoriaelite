import LastNoticeHero from "../components/sections/LastNoticeHero"
import LastNoticeMethod from "../components/sections/LastNoticeMethod"
import LastNoticeBonus from "../components/sections/LastNoticeBonus"
import LastNoticePricing from "../components/sections/LastNoticePricing"
import Footer from "../components/sections/Footer"

function LastNoticePage() {
    return (
        <main className="relative min-h-screen bg-transparent">

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
