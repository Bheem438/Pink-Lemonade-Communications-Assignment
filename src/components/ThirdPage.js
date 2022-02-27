import React from "react";
import classes from "./ThirdPage.module.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function ThirdPage() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>
          we are <b>built on...</b>
        </p>
      </div>
      <div className={classes.icons}>
        <div className={classes.icon}>
          <img src={icon1} />
          <strong>100%</strong>
          <span className={classes.text}>Honesty</span>
        </div>
        <div className={classes.icon}>
          <img src={icon2} />
          <strong>100%</strong>
          <span className={classes.text}>Commitment</span>
        </div>
        <div className={classes.icon}>
          <img src={icon3} />
          <strong>100%</strong>
          <span className={classes.text}>Integrity</span>
        </div>
        <div className={classes.icon}>
          <img src={icon4} />
          <strong>0%</strong>
          <span className={classes.text}>Gimmicks</span>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
