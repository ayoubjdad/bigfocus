import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";

const colorPalette = {
  black: "black",
  lightGreen: "#49e295",
  hardGreen: "#1f2d27",
  lightGray: "#edf0ef",
  hardGray: "#c7cec9",
};

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
