
import { Route, BrowserRouter as Router, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/navbar/nav";
import HomePage from '../src/Pages/Home'
import Footer from "./components/footer/footer"

import Servicespage from "./Pages/Servicespage";
import ContactUspage from "./Pages/ContactUspage";
import AboutUspage from "./Pages/AboutUspage";

import LoginSignupPage from "./Pages/LoginSignupPage";

// import { useState } from "react";
import DashboardPage from "./Pages/DashboardPage";
import InterestFormPage from "./Pages/InterestFormPage";
import EditProfile from "./components/editProfile/editProfile";

const AppContent = () => {
  const location = useLocation();
  return(
    <>
    
        {location.pathname !== '/Dashboard' && <Navbar />}

        <Routes>
            <Route path="/" exact element= {<HomePage />}/>
            <Route path="/AboutUs" exact element= {<AboutUspage />} />
            <Route path="/Services" exact element= {<Servicespage />}/>
            <Route path="/ContactUs" exact element= {<ContactUspage />}/>
            {/* <Route path="/Login" exact element= {<LoginSignupPage/>}/> */}

            <Route
            path="/Signin"
            exact
            element={<LoginSignupPage />}
            />
              


          {/* After user successfully sign up redirect to Login, after a successful Login
          redirect to interest page */}
            <Route path="/Interests" exact element={<InterestFormPage />} />
            <Route path="/Dashboard" element= {<DashboardPage/>} />
            <Route path="/EditProfile" element= {<EditProfile/>} />
        </Routes>

        {location.pathname !== '/Dashboard' && <Footer />}
        
  </>

  )
}


function App() {

  return (
    // <div className="App">
      <Router>
        <AppContent />
      </Router>
      
    // {/* </div> */}
  );
}

export default App;
