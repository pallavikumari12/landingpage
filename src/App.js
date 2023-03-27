import './App.css';
import bg1 from "./assets/bg1.jpeg";
import bg2 from "./assets/bg2.jpeg";
import bg3 from "./assets/bg3.jpeg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";




function App() {
  const navbarLinks = [
    {url: "#", title: "Home"},
    {url: "#", title: "Trip"},
    {url: "#", title: "Reward"},
  ];
  
  return (
    <div className="App">
      <Navbar navbarLinks= {navbarLinks} />
      <Hero imageSrc={bg1} />
        <Slider 
           imageSrc={bg2} 
           title={"Be an explorer.."} 
           subtitle={"explore and conquer the world.."}
         />
        <Slider
           imageSrc={bg3} 
           title={"Memories for life..."} 
           subtitle={"dream vacations are waiting for you..."}
           flipped={true}
         />
    </div>
  );
}

export default App;
