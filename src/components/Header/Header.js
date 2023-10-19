import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'

function Header() {
  return (
    <Navbar expand="lg" className="bg-black text-center">
      <Container className="py-2">
        <Navbar.Brand className={`fw-bold ${styles.logoBrand}`}> 
          Movify
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggleBg}/>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink to="/" className="nav-link text-light mx-2">
              <h6 className={`${styles.navLink} fw-bold`}>Home</h6>
            </NavLink>
            <NavLink to="/movies" className="nav-link text-light mx-3">
              <h6 className={`${styles.navLink} fw-bold`}>Movies</h6> 
            </NavLink>
            <NavLink to="/tvs" className="nav-link text-light mx-2">
              <h6 className={`${styles.navLink} fw-bold`}>Tv</h6>
            </NavLink>
            <NavLink to="/favorites" className="nav-link text-light mx-2">
              <h6 className={`${styles.navLink} fw-bold`}>Favorites</h6>
            </NavLink>
          </Nav>
          <NavLink to="/signup" className="nav-link text-light">
              <button className={`${styles.signupBtn}`}>SignUp</button>
            </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
