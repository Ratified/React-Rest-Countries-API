import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./layouts/HomePage"
import CountryPage from "./layouts/CountryPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<CountryPage />} />
      </Routes>
    </Router>
  )
}

export default App
