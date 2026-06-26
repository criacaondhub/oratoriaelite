import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"

const UpsellPage = lazy(() => import("./pages/UpsellPage"))
const UpsellPage2 = lazy(() => import("./pages/UpsellPage2"))

const TenTechniquesPage = lazy(() => import("./pages/TenTechniquesPage"))
// Rota /ultimo-aviso desativada (mantida para reativação futura)
// const LastNoticePage = lazy(() => import("./pages/LastNoticePage"))
const TrainingPage = lazy(() => import("./pages/TrainingPage"))
const OfertaExclusiva = lazy(() => import("./pages/OfertaExclusiva"))

function App() {
  return (
    <Router basename="/oratoria-de-elite">
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/10-tecnicas" element={<TenTechniquesPage />} />
          <Route path="/presente1" element={<UpsellPage />} />
          <Route path="/presente2" element={<UpsellPage2 />} />
          {/* Rota desativada — descomente para reativar */}
          {/* <Route path="/ultimo-aviso" element={<LastNoticePage />} /> */}
          <Route path="/treinamento" element={<TrainingPage />} />
          <Route path="/oferta-exclusiva" element={<OfertaExclusiva />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
