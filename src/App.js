import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <div className="bg-slate-200">
      <Header resume="https://drive.google.com/file/d/179bWH96XMtv2L_dw6EvOtJPY6lytvkHp/view?usp=sharing" />
      <Hero />
      <Skills />
      <About />
    </div>
  );
}

export default App;
