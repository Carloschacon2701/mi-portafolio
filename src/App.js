import './App.css';

import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Info } from './components/Info/Info';
import  Navbar  from './components/Navbar/Navbar';
import { Projects } from './components/projects/Projects';


function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <Info />
      <Projects />
      <Footer />
      

    </div>
  );
}

export default App;
