import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import WebDesign from "./components/OurWork/WebDesign";
import OurWork from './components/OurWork/OurWork';

function App() {
  return (
    <div className="app">
      <div class="main_container">
        <Header />
        <Hero />
        <OurWork />
      </div>
    </div>
  );
}

export default App;
