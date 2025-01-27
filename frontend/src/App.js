
import { Route, BrowserRouter as Router, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/navbar/nav";
import HomePage from '../src/Pages/Home'
import Footer from "./components/footer/footer"
import ContactUspage from "./Pages/ContactUspage";
import AboutUspage from "./Pages/AboutUspage";

import LoginSignupPage from "./Pages/LoginSignupPage";

// import { useState } from "react";
import DashboardPage from "./Pages/DashboardPage";
import InterestFormPage from "./Pages/InterestFormPage";
import EditProfile from "./components/editProfile/editProfile";
import Constructionpage from "./Pages/constructionpage";
import IsSuccessPage from "./Pages/isSuccessPage";

const AppContent = () => {
  const location = useLocation();
  return(
    <>
    
        {location.pathname !== '/Dashboard' && <Navbar />}

        <Routes>
            <Route path="/" exact element= {<HomePage />}/>
            <Route path="/AboutUs" exact element= {<AboutUspage />} />
            <Route path="/ContactUs" exact element= {<ContactUspage />}/>
            <Route path="/isSuccess" element= {<IsSuccessPage />} />
            

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
            <Route path="/ConstructionPage" element= {<Constructionpage />} />
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
