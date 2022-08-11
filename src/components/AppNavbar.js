import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar(){
    return(
        <>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Container>
                  <Navbar.Brand className="ms-3 brand" as={Link} to="/">Free Accu Weather</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link  as={Link} to="/">Home</Nav.Link>
                      <Nav.Link  as={Link} to="/weather">Weather</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    )
}