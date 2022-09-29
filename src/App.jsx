import React from "react";
import AwardedWorks from "./sections/AwardedWorks/AwardedWorks";
import Deliver from "./sections/Deliver/Deliver";
import Home from "./sections/Home/Home";
import SelectedWorks from "./sections/SelectedWorks/SelectedWorks";

const App = () => {
  return (
    <div className="bg-[#1e1e20]">
      <Home />
      <Deliver />
      <SelectedWorks />
      <AwardedWorks />
    </div>
  );
};

export default App;
