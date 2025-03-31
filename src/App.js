import Servicio from "./screens/servicio";
import HowWeWork from "./screens/howWeWork";
import Home from "./screens/home";
import Benefits from "./screens/Benefits";
import Contact from "./screens/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{fontFamily:"'Times New Roman', Times, serif"}}>
      <Navbar />
      <Home />
      <Servicio />
      <HowWeWork />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;
