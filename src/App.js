import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './front/Home';
import About from './front/About';
import Products from './front/Products';
import Contact from './front/Contact';
import Login from './front/Login';
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav style={{ display: 'flex', gap: '50px', background: 'black', padding: '20px', justifyContent: 'center' }}>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
           <Link to='/Products'>products</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/Login'>login</Link>

        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
