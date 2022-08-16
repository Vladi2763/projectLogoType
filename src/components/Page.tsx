import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import Main from "./content/Main";

import classes from "./Page.module.css";
import React, { useEffect, useState } from "react";

const Page = () => {
  useEffect(() => {
    setHeight(document.getElementById("header")!.clientHeight + 200);
  }, []);
  const [isSticky, setSticky] = useState(true);
  const [oldScroll, setOldScroll] = useState(0);
  const [height, setHeight] = useState(0);

  const [stateMenu, setStateMenu] = useState(false);

  const closeBurgerMenu = (event: MouseEvent) => {
    let target = event.target as Element;
    if (
      target.closest("#burgerIcon") !== document.getElementById("burgerIcon")
    ) {
      if (target.closest("#nav") !== document.getElementById("nav")) {
        setStateMenu(false);
        document.removeEventListener("click", closeBurgerMenu);
      }
    }
  };

  const burgerMenuHandler = () => {
    setStateMenu((prev) => !prev);
    if (!stateMenu) {
      document.addEventListener("click", closeBurgerMenu);
    }
  };

  window.addEventListener("scroll", () => {
    if (oldScroll > document.documentElement.scrollTop) {
      setSticky(true);
    } else if (document.documentElement.scrollTop > height) {
      setSticky(false);
    }
    setOldScroll(document.documentElement.scrollTop);
  });
  return (
    <div className={classes.page}>
      <Header clickMenu={burgerMenuHandler} stateMenu={stateMenu} />
      <Navigation isSticky={isSticky} stateMenu={stateMenu} />
      <Main />
    </div>
  );
};

export default Page;
