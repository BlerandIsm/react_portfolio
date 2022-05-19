import React, { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./components/portfolio";

function App() {
  const navCategories = [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
  ];
  const [currentCat, changeCat] = useState(navCategories[0].name);
  return (
    <div className="full">
      <Header
        categories={navCategories}
        currentCat={currentCat}
        changeCat={changeCat}
      ></Header>
      {currentCat === "About Me" ? (
        <About></About>
      ) : currentCat === "Portfolio" ? (
        <Portfolio></Portfolio>
      ) : currentCat === "Contact" ? (
        <Contact></Contact>
      ) : (
        alert(new Error("There was an issue"))
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;