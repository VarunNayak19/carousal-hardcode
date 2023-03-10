
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Slider from './component/banner/banner';
import Carousal from './component/carousal/carousal';
import Header from './component/header/header';
import Feedback from './pages/feedback';
import Home from './pages/home';
import Menu from './pages/menu';
import Products from './pages/products';
function App() {
  return (
    <Suspense fallback={null}>

      <div className="App">
        <Header />
        <Slider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>

      </div>
    </Suspense>
  );
}

export default App;
