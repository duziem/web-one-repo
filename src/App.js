import logo from "./logo.svg";
import "./App.css";
// import HelloWorld from './components/Welcome';
// import Profile from './components/Profile';
// import Title, { Description } from './components/Functions';
// import Card from "./components/Card";
import Home from "./pages/home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from "./pages/contactus";
import Gallery from "./pages/gallery";
import Studentsdata from "./pages/studentsdata";
import Aboutus from "./pages/aboutus";
import Applicationform from "./pages/applicationform";

function App() {
  // const studentsData = [
  //   {
  //     id: 1,
  //     name: "John",
  //     state: "Lagos",
  //     stack: "Full stack",
  //     description: "I am John from Lagos",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane",
  //     state: "Lagos",
  //     stack: "Full stack",
  //     description: "I am Jane from Lagos",
  //   },
  //   {
  //     id: 3,
  //     name: "Kelechi",
  //     state: "Imo",
  //     stack: "Full stack",
  //     description: "I am Kelechi from Imo",
  //   },
  // ];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <div className="App"> */}

        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/students-data" element={<Studentsdata />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/applicationform" element={<Applicationform />} />

        {/* </div> */}
      </Routes>
      <Footer />
    </BrowserRouter>

    // <div>
    //   <Header />
    //   <Home />
    //   <Footer />
    // </div>
  );
}

export default App;
