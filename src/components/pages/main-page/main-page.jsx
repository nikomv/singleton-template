import React, { useEffect } from "react";
import About from "/src/components/blocks/about/about";
import FeaturesList from "/src/components/blocks/features-list/features-list";
import Singleton from "../../singleton";
import { textToUser } from "../../../const";

const singletonObject = new Singleton();

function MainPage({ features }) {
  useEffect(() => {
    singletonObject.incSingleton("Главная");
  }, []);

  return (
    <>
      {singletonObject.getSingleton()["Главная"] > 5 && <h2>{textToUser}</h2>}
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
