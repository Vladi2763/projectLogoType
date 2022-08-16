import classes from "./Card.module.css";
import { Article } from "../../store/mainReducer";

const Card: React.FC<{ article: Article }> = (props) => {
  const article = props.article;
  return (
    <div className={classes.card}>
      <img
        className={classes.card_image}
        srcSet={`/images/${article.src}.svg`}
        alt="image"
      ></img>
      <span className={classes.card_tag}>{article.tag}</span>
      <span className={classes.card_title}>{article.title}</span>
      <div className={classes.container}>
        <span className={classes.container_author}>{article.author}</span>
        <span className={classes.container_date}>{article.date}</span>
        <span className={classes.container_views}>{article.veiws}</span>
      </div>
      <span className={classes.card_text}>{article.text}</span>
    </div>
  );
};

export default Card;
