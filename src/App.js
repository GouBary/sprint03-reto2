import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Principal from './components/Principal';
import About from './components/About';
import Shop from './components/Shop';
import Shop2 from './components/Shop2';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import Comunicacion from './components/Comunicacion';


export default function App() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Principal/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Shop" element={<Shop/>}/>
            <Route path="/Shop2" element={<Shop2/>}/>
            <Route path="/Menu1" element={<Menu1/>}/>
            <Route path="/Menu2" element={<Menu2/>}/>
            <Route path="/Menu3" element={<Menu3/>}/>
            <Route path="/Comunicacion" element={<Comunicacion/>}/>
         </Routes>
      </BrowserRouter>
  );
}