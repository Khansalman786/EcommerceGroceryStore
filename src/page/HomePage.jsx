import React from "react";
import MainBanner from "../commponents/MainBanner";
import Category from "../commponents/Category";
import BestSeller from "../commponents/BestSeller";
import BottomBanner from "../commponents/BottomBanner";
import Newsletter from "../commponents/Newsletter";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <Category />
      <BestSeller />
      <BottomBanner />
      <Newsletter />
    </>
  );
};

export default HomePage;
