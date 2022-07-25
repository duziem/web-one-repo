import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <ul>
            <li>
              <b>Services</b>
            </li>
            <li> Audit and assurance services</li>
            <li>Advisory Services</li>
            <li>Private wealth services</li>
            <li>SME Desk</li>
            <li>Tax services </li>
          </ul>

          <ul>
            <li>
              <b>Insights</b>
            </li>
            <li> Insights and publications</li>
            <li>Press Room</li>
            <li>Subscriptions</li>
            <li>SME Desk</li>
            <li>Tax services </li>
          </ul>

          <ul>
            <li>
              <b>Career</b>
            </li>
            <li> Insights and publications</li>
            <li>Press Room</li>
            <li>Subscriptions</li>
            <li>SME Desk</li>
            <li>Tax services </li>
          </ul>
        </div>

        <div style={{ width: "100%",border: "1px solid #fff",margin: "20px 0" }}></div>
        <div>
          <img src="../../assets/PwC-logo.svg" alt="" height="70px" width="70px" />
          {/* <span>
            <p style={{ color: "#fff", fontSize: "20px",display: "inline-block" }}>
              Contact us:
            </p>
            <a href="">
              <i
                className="fab fa-facebook"
                aria-hidden="true"
                style="color: #fff;"
              ></i>
            </a>
            <a href="">
              <i
                className="fab fa-twitter"
                aria-hidden="true"
                style="color: #fff;"
              ></i>
            </a>
            <a href="">
              <i
                className="fab fa-github"
                aria-hidden="true"
                style="color: #fff;"
              ></i>
            </a>
            <a href="">
              <i
                className="fab fa-linkedin"
                aria-hidden="true"
                style="color: #fff;"
              ></i>
            </a>
          </span> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
