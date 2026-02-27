import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import UpsellPage from "./pages/UpsellPage"

function App() {
  return (
    <Router basename="/oratoria-de-elite">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presente1" element={<UpsellPage />} />
      </Routes>
    </Router>
  )
}

export default App
