import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/Home/Home'
import { Carousel } from 'react-bootstrap'
import Merch from './pages/Merch/Merch'
import Product from './components/Product/Product'

function App() {
    return (
        <div className="appContent">
            <BrowserRouter>
                <NavBar />

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src="images/pexels-lumn-167699.jpg"
                            alt="CodedGhost Merch"
                        />
                        <Carousel.Caption>
                            <h3>CodedGhost Merch</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <hr className="half-rule" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Merch" element={<Merch />} />
                    <Route path="/Merch/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
