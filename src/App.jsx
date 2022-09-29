import React from "react";
import AwardedWorks from "./sections/AwardedWorks/AwardedWorks";
import Clients from "./sections/Clients/Clients";
import Deliver from "./sections/Deliver/Deliver";
import Home from "./sections/Home/Home";
import SelectedWorks from "./sections/SelectedWorks/SelectedWorks";
import Team from "./sections/Team/Team";

const App = () => {
  return (
    <div className="bg-[#1e1e20]">
      <Home />
      <Deliver />
      <SelectedWorks />
      <AwardedWorks />
      <Team />
      <Clients />
    </div>
  );
};

export default App;
