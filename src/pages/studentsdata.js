import React from "react";
import "./student-data-style.css";

function Studentsdata() {
  return (
    <>
      <main className="container">
        <section className="table-wrapper">
          <h1 className="heading">Students Record</h1>
          <table border="1">
            <colgroup>
              <col />
              <col style={{ backgroundColor: "rgb(5, 18, 34)" }} />
            </colgroup>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Track</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ade</td>
                <td>Ogundiame</td>
                <td>adeogundiame@gmail.com</td>
                <td>+123456789294</td>
                <td>Male</td>
                <td>Full Stack</td>
              </tr>
              <tr>
                <td>Muhammad</td>
                <td>Umar</td>
                <td>muhammadumar@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Data Science</td>
              </tr>
              <tr>
                <td>Oluwafisayo</td>
                <td>Owoyele</td>
                <td>fisayoowoyele@gmail.com</td>
                <td>+123456789065</td>
                <td>Female</td>
                <td>Data Science</td>
              </tr>
              <tr>
                <td>Nnamezie</td>
                <td>Okeke</td>
                <td>nnamezieokeke@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Artificial Intelligence</td>
              </tr>
              <tr>
                <td>Akinwumi</td>
                <td>Akinbobola</td>
                <td>akinwumiakibobola@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Full Stack</td>
              </tr>
              <tr>
                <td>Ayomide</td>
                <td>Salami</td>
                <td>auomidejohnson@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Cloud Engineering</td>
              </tr>
              <tr>
                <td>Jeremiah</td>
                <td>Alao</td>
                <td>jeremiahalao@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Cybersecurity</td>
              </tr>
              <tr>
                <td>Gabriel</td>
                <td>Sunday</td>
                <td>gabrielsunday@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Data Engineering</td>
              </tr>
              <tr>
                <td>Funmilayo</td>
                <td>Mogaji</td>
                <td>funmilayomogaji@gmail.com</td>
                <td>+123456789065</td>
                <td>Female</td>
                <td>Product Design</td>
              </tr>
              <tr>
                <td>Alfred</td>
                <td>Smith</td>
                <td>alfredsmith@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Data Analysis</td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Pan</td>
                <td>peterpan@gmail.com</td>
                <td>+123456789097</td>
                <td>Male</td>
                <td>Cloud Engineering</td>
              </tr>
              <tr>
                <td>Dennis</td>
                <td>Afan</td>
                <td>dennisafan@gmail.com</td>
                <td>+123456789090</td>
                <td>Male</td>
                <td>Internet of Things</td>
              </tr>
              <tr>
                <td>Adah</td>
                <td>Obi</td>
                <td>adahobi@gmail.com</td>
                <td>+123456789009</td>
                <td>Female</td>
                <td>Agile</td>
              </tr>
              <tr>
                <td>Ade</td>
                <td>Ogundiame</td>
                <td>adeogundiame@gmail.com</td>
                <td>+123456789294</td>
                <td>Male</td>
                <td>Full Stack</td>
              </tr>
              <tr>
                <td>Muhammad</td>
                <td>Umar</td>
                <td>muhammadumar@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Data Science</td>
              </tr>
              <tr>
                <td>Oluwafisayo</td>
                <td>Owoyele</td>
                <td>fisayoowoyele@gmail.com</td>
                <td>+123456789065</td>
                <td>Female</td>
                <td>Data Science</td>
              </tr>
              <tr>
                <td>Nnamezie</td>
                <td>Okeke</td>
                <td>nnamezieokeke@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Artificial Intelligence</td>
              </tr>
              <tr>
                <td>Akinwumi</td>
                <td>Akinbobola</td>
                <td>akinwumiakibobola@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Full Stack</td>
              </tr>
              <tr>
                <td>Ayomide</td>
                <td>Salami</td>
                <td>auomidejohnson@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Cloud Engineering</td>
              </tr>
              <tr>
                <td>Jeremiah</td>
                <td>Alao</td>
                <td>jeremiahalao@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Cybersecurity</td>
              </tr>
              <tr>
                <td>Gabriel</td>
                <td>Sunday</td>
                <td>gabrielsunday@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Data Engineering</td>
              </tr>
              <tr>
                <td>Funmilayo</td>
                <td>Mogaji</td>
                <td>funmilayomogaji@gmail.com</td>
                <td>+123456789065</td>
                <td>Female</td>
                <td>Product Design</td>
              </tr>
              <tr>
                <td>Alfred</td>
                <td>Smith</td>
                <td>alfredsmith@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Data Analysis</td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Pan</td>
                <td>peterpan@gmail.com</td>
                <td>+123456789097</td>
                <td>Male</td>
                <td>Cloud Engineering</td>
              </tr>
              <tr>
                <td>Dennis</td>
                <td>Afan</td>
                <td>dennisafan@gmail.com</td>
                <td>+123456789090</td>
                <td>Male</td>
                <td>Internet of Things</td>
              </tr>
              <tr>
                <td>Adah</td>
                <td>Obi</td>
                <td>adahobi@gmail.com</td>
                <td>+123456789009</td>
                <td>Female</td>
                <td>Agile</td>
              </tr>
              <tr>
                <td>Ade</td>
                <td>Ogundiame</td>
                <td>adeogundiame@gmail.com</td>
                <td>+123456789294</td>
                <td>Male</td>
                <td>Full Stack</td>
              </tr>
              <tr>
                <td>Muhammad</td>
                <td>Umar</td>
                <td>muhammadumar@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Data Science</td>
              </tr>
              <tr>
                <td>Oluwafisayo</td>
                <td>Owoyele</td>
                <td>fisayoowoyele@gmail.com</td>
                <td>+123456789065</td>
                <td>Female</td>
                <td>Data Science</td>
              </tr>
              <tr>
                <td>Nnamezie</td>
                <td>Okeke</td>
                <td>nnamezieokeke@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Artificial Intelligence</td>
              </tr>
              <tr>
                <td>Akinwumi</td>
                <td>Akinbobola</td>
                <td>akinwumiakibobola@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Full Stack</td>
              </tr>
              <tr>
                <td>Ayomide</td>
                <td>Salami</td>
                <td>auomidejohnson@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Cloud Engineering</td>
              </tr>
              <tr>
                <td>Jeremiah</td>
                <td>Alao</td>
                <td>jeremiahalao@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Cybersecurity</td>
              </tr>
              <tr>
                <td>Gabriel</td>
                <td>Sunday</td>
                <td>gabrielsunday@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Data Engineering</td>
              </tr>
              <tr>
                <td>Funmilayo</td>
                <td>Mogaji</td>
                <td>funmilayomogaji@gmail.com</td>
                <td>+123456789065</td>
                <td>Female</td>
                <td>Product Design</td>
              </tr>
              <tr>
                <td>Alfred</td>
                <td>Smith</td>
                <td>alfredsmith@gmail.com</td>
                <td>+123456789065</td>
                <td>Male</td>
                <td>Data Analysis</td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Pan</td>
                <td>peterpan@gmail.com</td>
                <td>+123456789097</td>
                <td>Male</td>
                <td>Cloud Engineering</td>
              </tr>
              <tr>
                <td>Dennis</td>
                <td>Afan</td>
                <td>dennisafan@gmail.com</td>
                <td>+123456789090</td>
                <td>Male</td>
                <td>Internet of Things</td>
              </tr>
              <tr>
                <td>Adah</td>
                <td>Obi</td>
                <td>adahobi@gmail.com</td>
                <td>+123456789009</td>
                <td>Female</td>
                <td>Agile</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Studentsdata;
