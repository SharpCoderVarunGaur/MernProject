import { Route ,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Contact from './Components/contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import USEFORM from './Components/useadd/useForms';
import Getiozr from './Components/useadd/getiozr';
import "./Ap.css";
import {useForm,FormProvider} from 'react-hook-form'
import { AppProvider } from './usecontext/userContext';

function App() {
  const methods=useForm()
  return (
 <>


  <Navbar/>
  
<FormProvider {...methods}>
  <Routes>

  <Route path='/'  element={
    <Home/>
  } />
 
  <Route path='/about'  element={
  <About />}  />
  

  <Route path='/contact' element={<Contact />} />

  <Route path='/login' element={<Login />} />


  <Route path='/signup' element={<Signup />} />
  {/* <Route  path='/' element={<USEFORM />}/> */}
  <Route  path='/a' element={<Getiozr />}/>
  </Routes>
 
</FormProvider>
 </>
  );
}

export default App;
