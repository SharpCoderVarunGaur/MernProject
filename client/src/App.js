import { Route ,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Contact from './Components/contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import "./Ap.css";

function App() {
  return (
 <>


  <Navbar/>
  
  <Routes>

  <Route path='/'  element={
    <Home/>
  } />
 
  <Route path='/about'  element={<About />}  />
  

  <Route path='/contact' element={<Contact />} />

  <Route path='/login' element={<Login />} />


  <Route path='/signup' element={<Signup />} />
 
  </Routes>
 
 </>
  );
}

export default App;
