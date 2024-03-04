import './App.css';
import BestTeam from './components/BestTeam';
import Built from './components/Built';
import Collaborate from './components/Collaborate';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Teams from './components/Teams';
import Tools from './components/Tools';
import Trust from './components/Trust';
import Work from './components/Work';
import Works from './components/Works';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Trust></Trust>
      <Collaborate></Collaborate>
      <Work></Work>
      <Tools></Tools>
      <Works></Works>
      <Built></Built>
      <Teams></Teams>
      <BestTeam></BestTeam>
      <Footer></Footer>
    </div>
  );
}

export default App;
