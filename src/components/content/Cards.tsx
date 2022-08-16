import { useSelector } from "react-redux";
import { InitialState } from "../../store/mainReducer";
import Card from "./Card";

import classes from "./Cards.module.css";

const Cards = () => {
  const articles = useSelector((state: InitialState) => state.articles);
  return (
    <div className={classes.content}>
      {articles.map((article, index) => (
        <Card key={index} article={article} />
      ))}
    </div>
  );
};

export default Cards;
