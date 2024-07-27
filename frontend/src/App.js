import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";
import CreatePDF from "./pages/create-pdf/CreatePDF";
import { QueryClient, QueryClientProvider } from "react-query";

const colorPalette = {
  black: "black",
  lightGreen: "#49e295",
  hardGreen: "#1f2d27",
  lightGray: "#edf0ef",
  hardGray: "#c7cec9",
};

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalogue" element={<Catalogue />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="pdf" element={<CreatePDF />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
