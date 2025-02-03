import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppLayout from "./components/public/AppLayout"
import Home from "./components/public/Home"
import Product from "./components/public/Product"
import About from "./components/public/About"
import Contact from "./components/public/Contact"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="products" element={<Product/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App