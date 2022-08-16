import Logo from "./Logo";
import classes from "./Header.module.css";
import { useState } from "react";

const Header: React.FC<{ clickMenu: () => void; stateMenu: boolean }> = (
  props
) => {
  return (
    <header id="header" className={classes.header}>
      <div className={classes.container}>
        <div
          id="burgerIcon"
          className={
            classes.container__menu +
            " " +
            (props.stateMenu ? classes.container__close : "")
          }
          onClick={props.clickMenu}
        >
          <span className={classes.container__icon}></span>
        </div>
        <Logo />
        <img
          className={classes.container__magnifier}
          src="/images/magnifier.svg"
          alt="magnifier"
        ></img>
      </div>
    </header>
  );
};

export default Header;
