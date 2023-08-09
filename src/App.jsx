import { Routes, Route } from "react-router-dom"

import Home from "./routes/Home"
import About from "./routes/About"
import Service from "./routes/Service"
import Contact from "./routes/Contact"
import LoginPage from "./routes/LoginPage"
import SignUpPage from "./routes/SignUpPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/service" element={ <Service /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/signup" element={ <SignUpPage /> } />
        <Route path="/login" element={ <LoginPage />} />
      </Routes>
    </>
  )
}

export default App
