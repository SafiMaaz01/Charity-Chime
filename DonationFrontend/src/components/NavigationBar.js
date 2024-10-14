import { Component } from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./images/blueLogo.png";

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: '#8374c2' }}  variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <LinkContainer to={"/"}>
                <Nav.Link>
                  <Image src={logo} alt="CharityXchange" style={{ width: "50px", height: "50px", marginRight: "10px",borderRadius: '50%' }} className="d-inline-block align-top" />
                </Nav.Link>
              </LinkContainer>
              <NavDropdown  title="Register" id="basic-nav-dropdown" style={{fontSize: "20px", fontWeight: "bold", marginTop: "10px"}}>
                <LinkContainer to={"/donorRegistrationForm"}>
                  <NavDropdown.Item>As Donor</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/recipientRegistrationForm"}>
                  <NavDropdown.Item>As Recipient</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/volunteerRegistrationForm"}>
                  <NavDropdown.Item>As Volunteer</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to={"/login"} style={{fontSize: "20px", fontWeight: "bold", marginTop: "10px"}}>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/ContactUs"} style={{fontSize: "20px", fontWeight: "bold", marginTop: "10px"}}>
                <Nav.Link>Contact us</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/AboutUs"} style={{fontSize: "20px", fontWeight: "bold", marginTop: "10px"}}>
                <Nav.Link>About us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
