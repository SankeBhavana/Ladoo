import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import{ Home} from './Comopnents/Home';
import Contact from './Comopnents/Contact';
import Navbar from './Comopnents/Navbar';
import  About  from './Comopnents/About';
import Login from './Comopnents/Login';
import Register from './Comopnents/Register';
import Customize from './Comopnents/Customize';
import Orders from './Comopnents/Orders';
import Reward from './Comopnents/Reward';
import ManageUser from './Admin/ManageUser';
import SuccessPay from './Comopnents/SuccessPay';
import Combos from './Comopnents/Combos';
import Cart from './Comopnents/Cart';
import PaymentPage from './Comopnents/PaymentPage';
import { Sidebar } from './Admin/Sidebar';
import Ladoo from './Comopnents/Ladoo';
import { Dashboard } from './Admin/Dashboard';



function Main()
{
  const loaction = useLocation();
  const hideOnRoutes = [ "/login", "/register"]
  return(
    <>
    {!hideOnRoutes.includes(loaction.pathname)&&<Navbar/>}


    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ladoo" element={<Ladoo/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/customize'element={<Customize/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/reward' element={<Reward/>}/>
      <Route path='/combos' element={<Combos/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/paymentpage" element={<PaymentPage />} />
      <Route path='/successpay' element={<SuccessPay/>}/>
      
      <Route path='/admin/dashboard'element={<Dashboard/>}/>
      <Route path='/admin/sidebar'element={<Sidebar/>}/>
      <Route path='/admin/manageuser' element={<ManageUser/>}/>
      

    </Routes>
    </>
  );
}


function App() {
  return (
   <Router>
    <Main/>
   </Router>
  );
}

export default App;
