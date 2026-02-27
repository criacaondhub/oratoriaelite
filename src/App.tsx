import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"

const UpsellPage = lazy(() => import("./pages/UpsellPage"))
const UpsellPage2 = lazy(() => import("./pages/UpsellPage2"))

function App() {
  return (
    <Router basename="/oratoria-de-elite">
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/presente1" element={<UpsellPage />} />
          <Route path="/presente2" element={<UpsellPage2 />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
