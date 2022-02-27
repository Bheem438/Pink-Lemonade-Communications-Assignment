import React from "react";
import classes from "./FourthPage.module.css";
import founder from "./images/founder.png";
import coFounder from './images/coFounder.png'

function FourthPage() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>
          Meet the team
          <br />
          <b>you can bank upon</b>
        </p>
      </div>
      <div className={classes.about}>
        <div className={classes.founder}>
          <img src={founder} />
          <div className={classes.content1}>
            <b>Ankush Aggarwal</b>
            <br />
            <span>Founder</span>
            <p>
              Ankush Agarwal founded Avail Finance, driven by the idea of using
              technology to financially empower every credit-worthy individual
              of India. He graduated with a bachelor's degree in Computer
              Science from the University of Illinois at Urbana-Champaign. At
              Ola Cabs, he spearheaded the launch of Ola Auto and led a team of
              30. His knowledge and expertise about the fintech industry knows
              no bounds, thanks to his constant desire to learn, grow, and
              achieve more.
            </p>
          </div>
        </div>
        <div className={classes.cofounder}>
          <div className={classes.content2}>
            <b>Tushar Mehndiratta</b>
            <br />
            <span>Co-founder</span>
            <p>
              Nothing stops Tushar Mehndiratta from thinking, "What can be done
              more to financially aid the underserved Indian urban mass?" His
              previous stint at Adobe Systems Inc, where he successfully filed
              three patents and achieved wonders, has helped him scale Avail
              Finance to new heights. An alumnus of the Indian Institute of
              Technology, Roorkee, he has completed his master's degree in
              Computer Science. He is passionate about technology, particularly
              machine learning and Al, and its ability to improve human lives.
            </p>
          </div>
          <div>
            <img src={coFounder} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
