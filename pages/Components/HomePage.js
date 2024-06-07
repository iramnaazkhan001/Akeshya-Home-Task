import Link from 'next/link';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => (
  <header className="header">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="./logo2.png" alt="Logo" className="logo-img" style={{ marginRight: '10px', backgroundColor: 'white'}} />
            <div className="logo-text">AKESHYA</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} href="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Nav.Link>
            <Nav.Link as={Link} href="/" style={{ textDecoration: 'none', color: 'black' }}>About</Nav.Link>
            <Nav.Link as={Link} href="/" style={{ textDecoration: 'none', color: 'black' }}>Services</Nav.Link>
            <Nav.Item>
              <Button style={{ borderRadius: '60px', backgroundColor: '#14279B', width: 110, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Nav.Link as={Link} href="/" style={{ textDecoration: 'none', color: 'white', padding: 0 }}>Contact Us</Nav.Link>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default HomePage;
