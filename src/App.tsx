import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import UpsellPage from "./pages/UpsellPage"
import UpsellPage2 from "./pages/UpsellPage2"

function App() {
  return (
    <Router basename="/oratoria-de-elite">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presente1" element={<UpsellPage />} />
        <Route path="/presente2" element={<UpsellPage2 />} />
      </Routes>
    </Router>
  )
}

export default App
