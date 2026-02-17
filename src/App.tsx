import Hero from "./components/sections/Hero"
import Method from "./components/sections/Method"

function App() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Method />

      {/* Spacer final apenas para manter o scroll se necessário */}
      <div className="h-32" />
    </main>
  )
}

export default App
