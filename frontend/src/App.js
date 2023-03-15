import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeSlider from "./components/HomeSlider/HomeSlider";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
