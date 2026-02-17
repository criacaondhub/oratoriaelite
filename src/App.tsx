import Hero from "./components/sections/Hero"
import Method from "./components/sections/Method"
import Pandemic from "./components/sections/Pandemic"

function App() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Method />
      <Pandemic />

      {/* Spacer final */}
      <div className="h-32" />
    </main>
  )
}

export default App
