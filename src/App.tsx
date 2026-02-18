import Hero from "./components/sections/Hero"
import Method from "./components/sections/Method"
import Pandemic from "./components/sections/Pandemic"
import ForWhom from "./components/sections/ForWhom"
import Modules from "./components/sections/Modules"

function App() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Hero />
        <Method />
        <Pandemic />
        <ForWhom />
        <Modules />

        {/* Spacer final */}
        <div className="h-32" />
      </div>
    </main>
  )
}

export default App
