import React from "react";
import "./applicationform.css";

function Applicationform() {
  return (
    <>
      <section className="container1">
        <form id="form">
          <div>
            <h3>Application Form</h3>
            <div>
              <label>FirstName:</label>
              <input type="text" placeholder="firstname" id="firstname" />
            </div>

            <div>
              <label>SecondName:</label>
              <input type="text" placeholder="secondname" id="secondname" />
            </div>

            <div>
              <label>Age:</label>
              <input type="number" placeholder="age" class="age" />
            </div>

            <div>
              <label>Gender:</label>
              <input type="radio" /> <a>female</a> <input type="radio" />
              <a>male</a>
            </div>

            <div>
              <label>State:</label>
              <select state="state" id="state">
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Kastina">Kastina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
            </div>

            <div className="courses">
              <label>Selected Courses:</label>
              <input type="checkbox" id="courses" value="DataScience" />
              <a>DataScience</a>
              <br />
              <input type="checkbox" id="courses" value="FullStack" />
              <a>FullStack</a>
              <br />
              <input type="checkbox" id="courses" />
              <a>Agile</a>
              <br />
              <input type="checkbox" id="courses" />
              <a>Internet Of Things</a>
              <br />
              <input type="checkbox" id="courses" />
              <a>Artificial Intelligence</a>
            </div>
          </div>

          {/* <!-- <input class="btn" type="submit" value="Submit"> --> */}
          <button className="btn" type="submit">
            Submit
          </button>
        </form>

        <div className="msg"></div>
        <ul id="users"></ul>
      </section>
    </>
  );
}

export default Applicationform;
