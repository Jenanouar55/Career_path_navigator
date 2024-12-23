
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/nav";
import HomePage from '../src/Pages/Home'
import Footer from "./components/footer/footer"

import Servicespage from "./Pages/Servicespage";
import ContactUspage from "./Pages/ContactUspage";
import AboutUspage from "./Pages/AboutUspage";

import LoginSignupPage from "./Pages/LoginSignupPage";


function App() {
  return (
    // <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element= {<HomePage />}/>
          <Route path="/AboutUs" element= {<AboutUspage />} />
          <Route path="/Services" element= {<Servicespage />}/>
          <Route path="/ContactUs" element= {<ContactUspage />}/>
          <Route path="/LoginSignup" element= {<LoginSignupPage/>}/>
        </Routes>

        <Footer />
      </Router>
      
    // {/* </div> */}
  );
}

export default App;
