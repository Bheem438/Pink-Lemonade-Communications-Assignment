import React from "react";
import classes from "./FifthPage.module.css";
import icon from "./images/circle.png";
import right from "./arrow-right.png";
import left from "./images/arrow-left.png";

function FifthPage() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>
          Our <b>Legacy</b>
        </p>
      </div>
      <div className={classes.year}>
        <div>
          <br />
          <br />
          <img src={left} />
        </div>
        <div>
          <p className={classes.left}>1998</p>
          <img className={classes.circle} src={icon} />
        </div>
        <div>
          <p className={classes.middle}>2001</p>
          <img className={classes.circle} src={icon} />
        </div>
        <div>
          <p className={classes.right}>2003</p>
          <img className={classes.circle} src={icon} />
        </div>
        <div>
          <br />
          <br />
          <img src={right} />
        </div>
      </div>
      <p className={classes.border}></p>
      <div className={classes.text}>
        <div>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </div>
        <div>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying.
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
