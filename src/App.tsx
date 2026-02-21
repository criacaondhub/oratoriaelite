import Hero from "./components/sections/Hero"
import Method from "./components/sections/Method"
import PoliceElite from "./components/sections/PoliceElite"
import Pandemic from "./components/sections/Pandemic"
import ForWhom from "./components/sections/ForWhom"
import Modules from "./components/sections/Modules"
import TornPaperSection from "./components/sections/TornPaperSection"
import Bonus from "./components/sections/Bonus"
import Testimonials from "./components/sections/Testimonials"
import Pricing from "./components/sections/Pricing"
import About from "./components/sections/About"
import FAQ from "./components/sections/FAQ"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import Footer from "./components/sections/Footer"

function App() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Global Parallax Background - Desktop Only */}
      <div
        className="fixed inset-0 z-0 hidden lg:block pointer-events-none"
        style={{
          backgroundImage: 'url("/oratoria-de-elite/assets/bg-parallax.webp?v=1.1")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      <div className="relative z-10">
        <Hero />
        <Method />
        <PoliceElite />
        <Pandemic />
        <ForWhom />
        <Modules />
        <TornPaperSection />
        <Bonus />
        <Testimonials />
        <Pricing />
        <About />
        <FAQ />

        <FloatingWhatsApp />
        <Footer />
      </div>
    </main>
  )
}

export default App
