import classes from "./Item.module.css";

const Item: React.FC<{ title: string }> = (props) => {
  return (
    <div className={classes.container__item}>
      <div className={classes.container__wrapper}>
        <span className={classes.container__title}>{props.title}</span>
        <div className={classes.container__arrow}></div>
      </div>
      <div className={classes.popup + " " + classes.popup_hovered}>
        <div className={classes.popup__item}>
          <span className={classes.popup__title}>Post Header</span>
          <div className={classes.popup__arrow}></div>
        </div>
        <div className={classes.popup__item}>
          <span className={classes.popup__title}>Post Layout</span>
          <div className={classes.popup__arrow}></div>
        </div>
        <div className={classes.popup__item}>
          <span
            className={
              classes.popup__title + " " + classes.popup__title_notFocused
            }
          >
            Share Buttons
          </span>
          <div className={classes.popup__arrow}></div>
        </div>
        <div className={classes.popup__item}>
          <span className={classes.popup__title}>Gallery Post</span>
          <div className={classes.popup__arrow}></div>
        </div>
        <div className={classes.popup__item}>
          <span className={classes.popup__title}>Video Post</span>
          <div className={classes.popup__arrow}></div>
        </div>
      </div>
    </div>
  );
};

export default Item;
