import Navbar from "./Components/Navbar/Navbar"
import Intro from "./Components/intro/Intro"
import Services from "./Components/Services/Services"
import Experince from "./Components/Experience/Experience"
import Works from "./Components/Works/Works"
import Portfolio from "./Components/Portfolio/Portfolio"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contect  from "./Components/Contact/Contect"
import Footer from "./Components/Footer/Footer"
import { useContext } from "react";
import { themeContext } from "./Context";
import './App.css';
function App(){
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }} 
    >
     <Navbar/>
     <Intro/>
     <Services/> 
     <Experince/>
     <Works/>
     <Portfolio/>
     <Testimonial/>
     <Contect/>
     <Footer/>

    </div>
  );
}

export default App;