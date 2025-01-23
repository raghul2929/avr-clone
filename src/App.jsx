import logo from './logo.svg';
import './App.css';
import Nav1 from './component/Nav1';
import Nav2 from './component/Nav2';
import Nav3 from './component/Nav3';
import Main1 from './component/Main1';
import Main2 from './component/Main2';
import Main3 from './component/Main3';
import Footer from './component/Footer';
import ConnectWithUs from './component/ConnectWithUs';

// import BespokeDesign from './component/BeSpokeDesign';
import BespokeDesign from './component/BeSpokeDesign'
import Assurance from './component/Assurance';

function App() {
  return (
  <>
  <Nav1 />
  <Nav2/>
  <Nav3 />
  <Main1 />
  <Main2/>
  <Main3 />
  <Assurance/>
  <BespokeDesign/>
  <ConnectWithUs/>
  <Footer/>
 
  
  </>
  );
}

export default App;
