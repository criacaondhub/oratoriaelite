import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import UpsellPage from "./pages/UpsellPage"

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oratoria-de-elite-presente-1" element={<UpsellPage />} />
      </Routes>
    </Router>
  )
}

export default App
