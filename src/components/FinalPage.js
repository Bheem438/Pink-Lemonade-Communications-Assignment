import React from "react";
import classes from "./FinalPage.module.css";
import logo from "./images/footImage.png";
import icons from "./images/footIcons.png";

function FinalPage() {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.ctn}>
          <img src={logo} />
          <div>
            <p>CONNECT WITH US</p>
            <img src={icons} />
          </div>
        </div>
        <div className={classes.ctn}>
          <b>OVERVIEW</b>
          <p>About us</p>
          <p>Knowledge Center</p>
          <p>Resource</p>
          <p>Careers</p>
          <p>Contact us</p>
          <p>FAQ's</p>
        </div>
        <div className={classes.ctn}>
          <b>PRODUCTS</b>
          <p>Saathi</p>
          <p>Credit ATM</p>
          <p>Instant cash</p>
          <p>Insurence</p>
          <p>Instant loan</p>
        </div>
        <div className={classes.ctn}>
          <p></p>
          <p>Bill payment</p>
          <p>Bank balance check</p>
          <p>Provident fund balance</p>
          <p>Check</p>
          <p></p>
          <p></p>
        </div>
        <div className={classes.ctn}>
          <b>CUSTOMER SERVICE</b>
          <p>Privacy policy</p>
          <p>Terms of use</p>
          <p>RBI Disclaimer</p>
          <p>Data protection</p>
          <p>Grivience redressal policy</p>
          <p>Help</p>
        </div>
      </div>
      <footer>
        <p className={classes.footerctx}>
          Reserve Bank of India does not accept any responsibility for
          correctness of any of the statements or representations made or
          opinions expressed by the Company, and does not provide any assurance
          for repayments of the loans lent on it.
        </p>
        <p>	&#169; 2020 Avail Finance. All rights reserved</p>
      </footer>
    </div>
  );
}

export default FinalPage;
