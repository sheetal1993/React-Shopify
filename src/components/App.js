import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import NavMenu from '../components/NavMenu'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavMenu />
        <Cart />
        <Routes>
          <Route exact path="/products/:handle" element={<ProductPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;