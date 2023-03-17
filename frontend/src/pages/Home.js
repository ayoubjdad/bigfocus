import React from "react";
import Notification from "../components/Notification/Notification";
import HomeProducts from "../components/HomeProducts/HomeProducts";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import Slider from "../components/Slider/Slider";
import Pourquoi from "../components/Pourquoi/Pourquoi";
import Partners from "../components/Partners/Partners";

export default function Home() {
  return (
    <div>
      <Notification />
      <HomeSlider />
      <Slider />
      <Partners />
      <HomeProducts />
      <Pourquoi />
    </div>
  );
}
