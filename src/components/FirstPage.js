import React from "react";
import classes from './FirstPage.module.css'
import logo from './images/Assign.png'

function FirstPage() {
  return (
    <div className={classes.container}>
      <div className={classes.leftside}>
        <p>
            Delivering <br />
            <strong>
            micro-financing
            <br />
            solutions
            <br />
            of today
          </strong>{" "}
          for
          <br />a better tomorrow
        </p>
      </div>
      <div className={classes.rightside}>
          <img className={classes.image1} src={logo} />
      </div>
    </div>
  );
}

export default FirstPage;
