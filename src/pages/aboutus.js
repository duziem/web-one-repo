import React from "react";
import "./aboutus.css";

function Aboutus() {
  return (
    <>
      <div className="firstsection">
        <div className="main-col">
          <h2>What we do</h2>
        </div>
        <div className="second-col">
          <p>
            We offer management consulting, strategy, custom enterprise
            solutions, and software as a service. With top talents carefully
            selected and trained to focus on continuous delivery and
            deployments, we ensure our customer's needs are our top priority and
            focus on delivering personalized value to each business no matter
            the industry.{" "}
          </p>

          <p>
            At Xerde limited, we take service 1 step further to help transform
            lives and businesses through our leadership in technology delivery
            and inclusive partnerships. We focus on providing the best quality
            on time. No matter your technology needs, if you are looking for an
            enthusiastic partner who will take your journey 1 step further and
            innovate even more around your solutions, look no further than
            Xerde. We are passionate about technology, ideas, and service. We
            combine all these to deliver excellent personalized products to our
            customers every day.
          </p>
        </div>
      </div>
      <div className="secondsection">
        <div className="secondmain-col">
          <h2>Who we are</h2>
        </div>
        <div className="secondsec-col">
          <img
            src="../../assets/download.png"
            alt="Caribbean Beach"
            loading="lazy"
          />
          <h2>Our Mission</h2>
          <p>
            Relentlessly challenge each version of our future by continually
            pursuing innovation and execution excellence in data-driven problem
            solving while uplifting lives one solution at a time.
          </p>
          <br />
          <img
            src="../../assets/downloadd.png"
            alt="Caribbean Beach"
            loading="lazy"
          />
          <h2>Our Vision</h2>
          <p>
            Become an African nexus for global innovation services, wealth,
            value creation and financial inclusion{" "}
          </p>
        </div>
        <div className="seconthird-col">
          <img
            src="../../assets/pwc.jpg"
            alt="Caribbean Beach"
            loading="lazy"
          />
        </div>
      </div>

      <h3>Our Core Values</h3>

      <div className="thirdsection">
        <div className="firstthird-col">
          <img
            src="../../assets/downl.png"
            alt="Caribbean Beach"
            loading="lazy"
          />
          <h2>Leadership</h2>
          <p>
            We are innovators by nature. We lead the pack, others follow. What
            we do, we do exceptionally well. At the core of our leadership is
            Service, Competence and Delivery.
          </p>
          <br />
        </div>

        <div className="secondthird-col">
          <img
            src="../../assets/down.jfif"
            alt="Caribbean Beach"
            loading="lazy"
          />
          <h2>Creativity</h2>
          <p>
            Creativity goes hand in hand with the passion that drives our
            company. To get our creative juices flowing, we add a bit of fun to
            the mix. We believe fun should always be a part of whatever we do.
          </p>
          <br />
        </div>

        <div className="thirdthird-col">
          <img
            src="../../assets/downl.png"
            alt="Caribbean Beach"
            loading="lazy"
          />
          <h2>Adventure</h2>
          <p>
            Move fast, think big. We take bold chances, we always passionately
            seek new possibilities and we stay curious. We are not afraid to
            take risks or make mistakes, because we know mistakes are learning
            opportunities.
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default Aboutus;
