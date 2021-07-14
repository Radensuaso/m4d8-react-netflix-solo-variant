import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../assets/netflix_logo.png"
import profilePic from "../assets/profile-pic.jpg"
import { FaSearch, FaBell, FaSortDown } from "react-icons/fa"
import { withRouter, Link } from "react-router-dom"

const NetflixNavbar = (props) => (
  <Navbar
    className="bg-dark-netflix home-navbar"
    collapseOnSelect
    expand="lg"
    variant="dark"
  >
    <Container fluid>
      <Navbar.Brand href="#home">
        <img id="logo-navbar" src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link
            className={
              props.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            Home
          </Link>
        </Nav>
        <Nav className="align-items-center">
          <Nav.Link href="#">
            <FaSearch />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#">
            <FaBell />
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center" eventKey={3} href="#">
            Tigers
            <img
              className="mx-2"
              id="profile-pic"
              src={profilePic}
              alt="profile-pic"
            />
            <FaSortDown />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default withRouter(NetflixNavbar)
