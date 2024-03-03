import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
    <Router>
    <div id="menu-wrapper">
    <div id="menu">
    <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
        </div>
        </div>
        <div id="header-wrapper">
	        <div id="header">
		        <div id="logo">
			        <h1><Link>divyalalwani.com</Link></h1>
		        </div>
	        </div>
        </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}
export default App;