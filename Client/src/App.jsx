import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Signup from './Signup';
import{BrowserRouter, Routes ,Route} from 'react-router-dom'
import Loginf from './Loginf';
import Home from './Home';

function App() {

  return (
    <BrowserRouter>
     <Routes>
     <Route path="/register" element={<Signup/>}> </Route>
     <Route path="/loginf" element={<Loginf/>}> </Route>
     <Route path="/home" element={<Home/>}> </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App
