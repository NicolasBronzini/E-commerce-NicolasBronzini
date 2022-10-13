
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from "../CardWidget"


function OffcanvasExample() {

  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 barra">
          <Container fluid >
            <Navbar.Brand  > <Link to="/" className='titulo'> BlueButterfly</Link></Navbar.Brand>
            <div>
              <div className='botones'>
           <Link to="/cart"><CartWidget/></Link>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className='boton_1'/>
              </div>
               <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              >
                <Offcanvas.Header closeButton className='links-barra'>
                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 BlueButterfly
                 </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='links-barra'>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <NavDropdown
                    title="Categoria"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item > <Link to="/category/Electrodomesticos"> Electrodomesticos</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/category/Informatica"> Informatica</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/category/Deportes"> Deportes</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/category/jewelery"> Jewlery</Link></NavDropdown.Item>

                  </NavDropdown>
                   
                  </Nav>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
           
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;