import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "rgb(254, 254, 254)", boxShadow:"0px 2px 10px rgba(0, 0, 0, 0.1)", height:"150px"}}>
            <Container>
                <Navbar.Brand href="#home">
                    <span style={{ fontSize: '35px', fontWeight: 'bold' }}>FASHION</span>
                    <span style={{ fontSize: '35px', color: 'red', fontWeight: 'bold' }}>CUBE</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="ms-autoa">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <NavDropdown title="SHOP" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <ul className="navbar-nav d-flex flex-row">
                            {/* Icons */}
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">
                                    <i class="fa-solid fa-user"></i>
                                </a>
                            </li>
                            <li className="nav-item me-3 me-lg-0 vongtron"
                                style={{ backgroundColor:"rgb(238, 238, 238)",width:"38px", textAlign:"center", borderRadius:"50px"}}>
                                <a className="nav-link" href="#">
                                    <i class="fa-solid fa-bag-shopping"></i>    
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </Container>
        </Navbar>
    );
}

export default BasicExample;
