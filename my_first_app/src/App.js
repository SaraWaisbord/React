
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Services from './screens/Services';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import ImgComponent from './components/ImgComponents';
import b from "./imgs/Business.jpg";
import ai from "./imgs/Artificial Intelligence.jpg";
import h from "./imgs/hardware.png";
import it from "./imgs/it.png";
import s from "./imgs/software.jpg";
import w from "./imgs/web.jpg";
function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="tech-navbar">
        <Container>
          <Navbar.Brand className="brand-logo">TechFlow</Navbar.Brand>
            <Nav className="me-auto nav-links">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              {}
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle id="dropdown-basic" variant="dark">
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/servicesAi">Artificial Intelligence</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/servicesSoftware">Software</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/servicesHardware">Hardware</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/servicesIt">Information Technology</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/servicesBusiness">Business</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/servicesPhotonics">Silicon Photonics</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/servicesAi' element={<ImgComponent path ={h}/>} />
        <Route path='/servicesSoftware' element={<ImgComponent path ={s}/>} />
        <Route path='/servicesHardware' element={<ImgComponent path ={ai}/>} />
        <Route path='/servicesIt' element={<ImgComponent path ={it}/>} />
        <Route path='/servicesBusiness' element={<ImgComponent path ={b}/>} />
        <Route path='/servicesPhotonics' element={<ImgComponent path ={w}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
