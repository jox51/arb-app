import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Landing from "./pages/Landing"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
