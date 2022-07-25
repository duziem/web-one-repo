import React from "react";
import "./indexstyle.css";

function Home() {
  return (
    <>
      <section id="company">
        <div></div>
        <div id="company-text">
          <h1>PWC</h1>
          <h2>
            Combining human ingenuity, experience and technology innovation to
            build trust in society and solve important problems
          </h2>
        </div>
      </section>

      <section id="about">
        <div>
          <img
            src="../../assets/pwcsvg.png"
            alt="Caribbean Beach"
            width="100%"
            height="100%"
          />
        </div>
        <div>
          <p>
            We are a community of solvers combining human ingenuity, experience
            and technology innovation to deliver sustained outcomes and build
            trust
          </p>
          <img src="../../assets/pwc9.jpg" alt="" />
          <div id="image-set">
            <img src="../../assets/Pwc__4.jpg" alt="" />
            <img src="../../assets/pwc19.jpg" alt="" />
          </div>
        </div>
      </section>

      <section id="services">
        <div>
          <img src="../../assets/pwc6.jpg" alt="" />
          <h2 style={{ fontSize: "40px", fontWeight: "300" }}>Tax</h2>
          <p style={{ fontSize: "20px", width: "400px" }}>
            This article shares insights on Nigeria's Federal High Court, Tax
            Appeal, new rules 2022.
          </p>
        </div>
        <div>
          <img src="../../assets/pwc__7.jpg" alt="" />
          <h2 style={{ fontSize: "40px", fontWeight: "300" }}>
            Digital assets
          </h2>
          <p style={{ fontSize: "20px", width: "400px" }}>
            In an era of new innovations and inventions, digital assets cannot
            be underplayed and is an emerging trend in the capital markets
          </p>
        </div>
        <div>
          <img src="../../assets/pwc__12.jpg" alt="" />
          <h2 style={{ fontSize: "40px", fontWeight: "300" }}>Tax bites</h2>
          <p style={{ fontSize: "20px", width: "400px" }}>
            Get updates and latest information on taxation matters in Nigeria
            and globally.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
