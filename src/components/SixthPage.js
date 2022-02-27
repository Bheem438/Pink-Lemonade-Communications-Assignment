import React from "react";
import classes from "./SixthPage.module.css";
import logo from "./images/ola.png";
import rapido from "./images/rapido-logo.png";
import quess from "./images/Quess_Logo.png";
import urban from "./images/urban.png";
import swiggy from "./images/swiggy.png";
import logo1 from "./images/itIcon.png";
import logo2 from "./images/finance.png";
import logo3 from "./images/webdesigner.png";
import logo4 from "./images/customer-care.png";
import arrow from "./arrow-right.png";

function SixthPage() {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.heading}>
          <p>
            Our lending <b>partners</b>
          </p>
        </div>
        <div className={classes.logos}>
          <img src={logo} />
          <img src={rapido} />
          <img src={quess} />
          <img src={urban} />
          <img src={swiggy} />
        </div>
      </div>
      <div className={classes.waste}></div>

      <div className={classes.box2}>
        <div className={classes.career}>
          An inspiring <b>career awaits you</b>
        </div>
        <div className={classes.content}>
          <p>
            We bring together an amazing team of thinkers, explorers, and
            creators to get you that extra help you might need in your financial
            journey.
          </p>
          <p>
            {" "}
            Explore a variety of opportunities and find the role that works for
            you.
          </p>
        </div>
      </div>
      <div className={classes.company}>
        <div className={classes.images}>
          <img className={classes.icons} src={logo1} />
          <p>IT Consultant</p>
          <img className={classes.arrow} src={arrow} />
        </div>
        <div className={classes.images}>
          <img className={classes.icons} src={logo2} />
          <p>Finance Manager</p>
          <img className={classes.arrow} src={arrow} />
        </div>
        <div className={classes.images}>
          <img className={classes.icons} src={logo3} />
          <p>Web Designer</p>
          <img className={classes.arrow} src={arrow} />
        </div>
        <div className={classes.images}>
          <img className={classes.icons} src={logo4} />
          <p>Customer Service</p>
          <img className={classes.arrow} src={arrow} />
        </div>
      </div>
      <div className={classes.work}>
        <div className={classes.txt}>
          <p>work with us <img className={classes.arrow} src={arrow} />{" "}</p>
        </div>
      </div>
    </div>
  );
}

export default SixthPage;
