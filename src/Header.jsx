import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" style={{ height: "70px" }}>
            <Container>
                <Navbar.Brand href="#home">FREE SHIPPING ON ALL U.S ORDERS OVER $50</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                USD
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        CAD
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        AUD
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        EUR
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                English
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Jappanes
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Viet Nam
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Franch
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                My Account
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i class="fa-solid fa-volume-high"></i> Sign In
                                    </a>
                                </li>
                                <hr />
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i class="fa-solid fa-user-plus"></i> Register
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
