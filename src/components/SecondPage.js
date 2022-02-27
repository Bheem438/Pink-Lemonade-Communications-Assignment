import React from "react";
import classes from "./SecondPage.module.css";
import logo from "./images/Assign2.png";

function SecondPage() {
  return (
    <div className={classes.container}>
      <div className={classes.leftside}>
        <p className={classes.strong}>
          Driven by Values,
          <br />
          <strong>powered by humans</strong>{" "}
        </p>
        <img className={classes.image2} src={logo} />
      </div>
      <div className={classes.rightside}>
        <p>
          Avail Finance was born in {`<Year needed>`} with a vision to serve the
          400+ million population of our country who lack access to basic
          financial services. We aim to include every credit-worthy individual,
          currently underserved by formalized lending institutions under the
          financial umbrella.
        </p>
        <p>
          We understand the value of your money and have been working
          round-the-clock to develop dramatic solutions that let you save more,
          spend more, and grow more. You can now avail of instant loan online
          for an emergency, withdraw instant cash to deal with a et a personal
          loan for a loved one.
        </p>
        <p>
          Our team makes micro-financing simple and secure with the Avail
          Finance app, sparing you the harassment from loan sharks. No more
          borrowing from friends and family or relying on chit funds when you
          need quick cash. Instead, apply for instant loans online, get
          immediate cash, or take advantage of our other diverse solutions.
        </p>
        <p>
          The hassles of having a poor CIBIL score are many. That's why we hold
          <br />
          your hand throughout the way and help you build your credit score
          <br />
          through timely, simple repayment.
        </p>
      </div>
    </div>
  );
}

export default SecondPage;
