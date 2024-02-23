import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/layout';
import Home from './component/Home'
import About from './component/About';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio';
import Myskill from './component/Myskill'
import Certificate from './component/Certificate'

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/myskill' element={<Myskill/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/certificate' element={<Certificate/>}/>
    </Route>
  </Routes> 
  </>
  );
}

export default App;
