import './App.css';

import Home from "./pages/Home.js";
import Clubs from "./pages/Clubs.js"
import Instructors from './pages/Instructors.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './pages/LoginForm.js';
import SignupForm from './pages/SingupForm.js';
import ClubsProfile from './pages/ClubsProfile.js'
import FacilitiesList from './pages/Facilities.js'
import Error404 from './pages/Error404.js'
import Facilities from "./pages/Facilities.js"
import FaqPage from "./pages/FaqPage.js"
function App() {//the root if the application, sees all the changes in the url
  return (
   <div>
      <Router>
      <Routes>
        <Route path = "/home" element = {<Home />}> </Route>
        <Route path = "/" element ={<LoginForm></LoginForm>}></Route>
        <Route path = "/registration" element = {<SignupForm></SignupForm>}></Route>
        <Route path = '/courses'></Route>
        <Route path ="/clubs" element = {<Clubs></Clubs>}></Route>
        <Route path = "/instructors" element={<Instructors></Instructors>}></Route>
        <Route path =  "/clubProfile" element = {<ClubsProfile></ClubsProfile>}></Route>
        <Route path = "/faq" element = {<FaqPage></FaqPage>}></Route>
        <Route path = "facilities" element = {<Facilities></Facilities>}></Route>
      </Routes>
    </Router>
    
  
  
   </div>

  );
}

export default App;
