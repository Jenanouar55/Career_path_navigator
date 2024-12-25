
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/navbar/nav";
import HomePage from '../src/Pages/Home'
import Footer from "./components/footer/footer"

import Servicespage from "./Pages/Servicespage";
import ContactUspage from "./Pages/ContactUspage";
import AboutUspage from "./Pages/AboutUspage";

import LoginSignupPage from "./Pages/LoginSignupPage";
import InterestFormPage from "./Pages/InterestFormPage";
import { useState } from "react";


function App() {

  const [isSignUp, setisSignUp] = useState(false);
  const [isLogin, setisLogin] = useState(false);

  return (
    // <div className="App">
      <Router>
        <Navbar />

        <Routes>
          
            <Route path="/" exact element= {<HomePage />}/>
            <Route path="/AboutUs" exact element= {<AboutUspage />} />
            <Route path="/Services" exact element= {<Servicespage />}/>
            <Route path="/ContactUs" exact element= {<ContactUspage />}/>
            {/* <Route path="/Login" exact element= {<LoginSignupPage/>}/> */}

            <Route
            path="/Signin"
            exact
            element={<LoginSignupPage onSignin={()=>setisSignUp(true)}/>}
            />
              


          {/* After user successfully sign up redirect to Login, after a successful Login
          redirect to interest page */}

            <Route path="/Interests" element= {<InterestFormPage />} />
          
        </Routes>

        <Footer />
      </Router>
      
    // {/* </div> */}
  );
}

export default App;
