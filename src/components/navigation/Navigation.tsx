import classes from "./Navigation.module.css";

import Item from "./Item";
import { useSelector } from "react-redux";
import { InitialState } from "../../store/mainReducer";

const Navigation: React.FC<{ isSticky: boolean; stateMenu: boolean }> = (
  props
) => {
  const items = useSelector((state: InitialState) => state.listNavigation);
  return (
    <nav
      id="nav"
      className={
        classes.navigation +
        " " +
        (!props.isSticky ? classes.navigation_removeSticky : "") +
        " " +
        (props.stateMenu ? classes.navigation_mobile : "")
      }
    >
      <div className={classes.container}>
        {items.map((item, index) => (
          <Item title={item} key={index} />
        ))}
        <span className={classes.navigation__buy}>Buy Now</span>
      </div>
    </nav>
  );
};

export default Navigation;
