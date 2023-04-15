import React from "react";
import Header from "./Components/Profile/Header";

import Footer from './Components/Profile/Footer';
import FullName from "./Components/Profile/FullName";
import Bio from "./Components/Profile/Bio";
import Profession from "./Components/Profile/Profession";
//import HandleName from './Profile/Component/HandleName'

function App() {
  const handleEvent = () => {
    alert(`${this.props.FullName}`);
  };
  return (
    <>
    <header id="home">
    <Header/>
    </header>
    <body style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1>Self-Profile </h1>
    {/*  And invoking the <FullName/> component… */}
      <FullName firstName="Salma" lastName="Hamzaoui">
      <p>Nice to meet you</p>
      </FullName>
      <br/>
      <div style={{border:"black double",  marginTop:"20px",}} id="about">
      <Bio FullName="Salma Hamzaoui" Age="34" Gender="Female" Interests="Learning, Reading books , Jogging"  />
      </div>
      <br/>
      <div id="profession"><Profession/></div>
      <button onClick={handleEvent}>User</button>
    </body>
    <footer id="contact">
      <Footer/>
      </footer>

    </>
  );
}
export default App;
