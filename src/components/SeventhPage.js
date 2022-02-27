import React from "react";
import classes from "./SeventhPage.module.css";
import arrow from "./images/arrowRight.png";
import mobile from "./images/mobile.png";

function SeventhPage() {
  return (
    <div className={classes.ctx}>
      <div className={classes.box1}>
        <p>
          Live your life Without
          <br />
          <b>any compromise</b>
        </p>
        <div className={classes.connect}>
          CONNECT WITH US &nbsp;&nbsp;&nbsp; <img src={arrow} />
        </div>
      </div>
      <div>
        <img className={classes.mobile} src={mobile} />
      </div>
    </div>
  );
}

export default SeventhPage;
