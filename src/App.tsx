import Hero from "./components/sections/Hero"
import Method from "./components/sections/Method"
import Pandemic from "./components/sections/Pandemic"
import ForWhom from "./components/sections/ForWhom"
import Modules from "./components/sections/Modules"
import TornPaperSection from "./components/sections/TornPaperSection"
import Bonus from "./components/sections/Bonus"
import Testimonials from "./components/sections/Testimonials"
import Pricing from "./components/sections/Pricing"
import About from "./components/sections/About"
import FAQ from "./components/sections/FAQ"

function App() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Hero />
        <Method />
        <Pandemic />
        <ForWhom />
        <Modules />
        <TornPaperSection />
        <Bonus />
        <Testimonials />
        <Pricing />
        <About />
        <FAQ />

        {/* Spacer final */}
        <div className="h-32" />
      </div>
    </main>
  )
}

export default App
