import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Doctors from './components/Doctors';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {

  return (
    <div className="App">
     <Navbar />
     <Home />
     {/* <Doctors /> */}

     {/* <Contact /> */}
     <Footer />
    </div>
  );
}

export default App;
