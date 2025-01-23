
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import Home from './components/screens/Home';
import Services from './components/screens/Services';
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

import './i18n'
import "./index.css"
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';

const  NavigateComponent=()=>{


    return(
        <>
    <Router>
      <Navbar bg="dark" variant="dark" className="tech-navbar">
        <Container>
          <Navbar.Brand className="brand-logo">TechFlow</Navbar.Brand>
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to="/">{t("homeTitle")}</Nav.Link>
            <Nav.Link as={Link} to="/about">{t("aboutTitle")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contactTitle")}</Nav.Link>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle id="dropdown-basic" variant="dark">
                {t("services")}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/servicesAi">{t("servicesAi")}</Dropdown.Item>
                <Dropdown.Item as={Link} to="/servicesSoftware">{t("servicesSoftware")}</Dropdown.Item>
                <Dropdown.Item as={Link} to="/servicesHardware">{t("servicesHardware")}</Dropdown.Item>
                <Dropdown.Item as={Link} to="/servicesIt">{t("servicesIt")}</Dropdown.Item>
                <Dropdown.Item as={Link} to="/servicesBusiness">{t("servicesBusiness")}</Dropdown.Item>
                <Dropdown.Item as={Link} to="/servicesPhotonics">{t("servicesPhotonics")}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      <button type="button" className="btn btn-secondary btn-sm" onClick={() => translate('en')}>En</button>
      <button type="button" className="btn btn-secondary btn-sm" onClick={() => translate('he')}>He</button>
      <Routes>
        <Route path='/servicesAi' element={<ImgComponent path={h}/>} />
        <Route path='/servicesSoftware' element={<ImgComponent path={s}/>} />
        <Route path='/servicesHardware' element={<ImgComponent path={ai}/>} />
        <Route path='/servicesIt' element={<ImgComponent path={it}/>} />
        <Route path='/servicesBusiness' element={<ImgComponent path={b}/>} />
        <Route path='/servicesPhotonics' element={<ImgComponent path={w}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router> 
    </>


);
}
export default NavigateComponent;
