import { useRef, useEffect } from "react";
import AwardedWorks from "./sections/AwardedWorks/AwardedWorks";
import Clients from "./sections/Clients/Clients";
import Deliver from "./sections/Deliver/Deliver";
import Home from "./sections/Home/Home";
import SelectedWorks from "./sections/SelectedWorks/SelectedWorks";
import Team from "./sections/Team/Team";
import CTA from "./sections/CTA/CTA";
import Footer from "./sections/Footer/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const App = () => {
  const containerRef = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={containerRef}>
      <main className="bg-[#1e1e20]" data-scroll-container ref={containerRef}>
        <Home />
        <Deliver />
        <SelectedWorks />
        <AwardedWorks />
        <Team />
        <Clients />
        <CTA />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default App;
