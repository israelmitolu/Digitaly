import React from "react";
import AwardedWorks from "./sections/AwardedWorks/AwardedWorks";
import Clients from "./sections/Clients/Clients";
import Deliver from "./sections/Deliver/Deliver";
import Home from "./sections/Home/Home";
import SelectedWorks from "./sections/SelectedWorks/SelectedWorks";
import Team from "./sections/Team/Team";
import CTA from "./sections/CTA/CTA";

const App = () => {
  return (
    <div className="bg-[#1e1e20]">
      <Home />
      <Deliver />
      <SelectedWorks />
      <AwardedWorks />
      <Team />
      <Clients />
      <CTA />
    </div>
  );
};

export default App;
