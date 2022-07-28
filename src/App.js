import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Getapp from "./Components/Pages/GetApp/Getapp";
import Market from "./Components/Pages/Market/Market";
import SpiritSwap from "./Components/Pages/SpiritSwap/SpiritSwap"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Getapp" element={<Getapp />}/>
          <Route path="/Market" element={<Market />}/>
          <Route path="/SpiritSwap" element={<SpiritSwap />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
