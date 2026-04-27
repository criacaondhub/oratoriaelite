import UpsellHero from "../components/sections/UpsellHero"
import UpsellMethod from "../components/sections/UpsellMethod"
// import UpsellForWhom from "../components/sections/UpsellForWhom"
// import UpsellModules from "../components/sections/UpsellModules"
import UpsellBonus from "../components/sections/UpsellBonus"
// import Testimonials from "../components/sections/Testimonials"
// import Guarantee from "../components/sections/Guarantee"
import UpsellPricing from "../components/sections/UpsellPricing"
// import UpsellSupport from "../components/sections/UpsellSupport"
import Footer from "../components/sections/Footer"

function UpsellPage() {
    return (
        <main className="relative min-h-screen bg-transparent">

            <div className="relative z-10">
                <UpsellHero />
                <UpsellMethod />
                {/* <UpsellForWhom /> */}
                {/* <UpsellModules /> */}
                <UpsellBonus />
                {/* <Testimonials /> */}
                {/* <Guarantee /> */}
                <UpsellPricing />
                {/* <UpsellSupport /> */}
                <Footer />
            </div>
        </main>
    )
}

export default UpsellPage
