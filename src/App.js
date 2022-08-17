import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
        <Route path = '/' component={NavBar}/>
        <Route path = '/' component={Footer}/>
        <Route exact path = '/' component={Home} />
        <Route exact path = '/about' component={About} />
        <Route exact path = '/certifications' component={Certifications} />
        <Route exact path = '/contact' component={Contact} />
    </div>
  );
}

export default App;
