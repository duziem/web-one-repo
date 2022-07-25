import React from "react";
import './contactus.css';

function Contactus() {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="column">
            <img src="../../assets/location.PNG" style={{ width: "100%" }} />
          </div>
          <div className="column">
            <form action="">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label htmlFor="country">Location</label>
              <select id="state" name="state">
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="portharcourt">PortHarcourt</option>
              </select>

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Submit" id="submitcontact" />
              {/* <!-- <a href="index.html" id="submit" role="button">Submit</a> --> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
