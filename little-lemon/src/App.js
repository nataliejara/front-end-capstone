
/* import './App.css'; */
import React from "react";
/*import Header from "./components/Header";*/
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
/*import BookingForm from "./components/BookingForm";*/

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Main />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </React.Fragment>
  );
}

export default App;
