import UpsellHero2 from "../components/sections/UpsellHero2"
import UpsellMethod2 from "../components/sections/UpsellMethod2"
// import UpsellForWhom from "../components/sections/UpsellForWhom"
// import UpsellModules from "../components/sections/UpsellModules"
import UpsellBonus2 from "../components/sections/UpsellBonus2"
// import Testimonials from "../components/sections/Testimonials"
// import Guarantee from "../components/sections/Guarantee"
import UpsellPricing2 from "../components/sections/UpsellPricing2"
// import UpsellSupport from "../components/sections/UpsellSupport"
import Footer from "../components/sections/Footer"

function UpsellPage2() {
    return (
        <main className="relative min-h-screen bg-transparent">

            <div className="relative z-10">
                <UpsellHero2 />
                <UpsellMethod2 />
                {/* <UpsellForWhom /> */}
                {/* <UpsellModules /> */}
                <UpsellBonus2 />
                {/* <Testimonials /> */}
                {/* <Guarantee /> */}
                <UpsellPricing2 />
                {/* <UpsellSupport /> */}
                <Footer />
            </div>
        </main>
    )
}

export default UpsellPage2
