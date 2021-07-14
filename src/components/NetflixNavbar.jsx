import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../assets/netflix_logo.png"
import profilePic from "../assets/profile-pic.jpg"
import { FaSearch, FaBell, FaSortDown } from "react-icons/fa"
const NetflixNavbar = () => (
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
          <Nav.Link href="#features">Home</Nav.Link>
        </Nav>
        <Nav className="align-items-center">
          <Nav.Link href="/">
            <FaSearch />
          </Nav.Link>
          <Nav.Link eventKey={2} href="/">
            <FaBell />
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center" eventKey={3} href="#">
            Tigers{" "}
            <img
              className="mx-2"
              id="profile-pic"
              src={profilePic}
              alt="profile-pic"
            />{" "}
            <FaSortDown />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NetflixNavbar

/* <nav className="home-navbar navbar navbar-expand-lg navbar-dark bg-dark-netflix">
    <div class="container-fluid">
      <a class="navbar-brand ml-3" href="/">
        <img src="assets/netflix_logo.png" alt="" id="logo-navbar" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./backoffice.html">
              Back Office
            </a>
          </li>
        </ul>
        <i class="fas fa-search mr-3"></i>
        <p class="pt-3 mr-3">Tigers</p>
        <i class="fas fa-bell mr-3"></i>
        <img id="profile-pic" class="mr-2" src="" alt="profile picture" />
        <i class="fas fa-sort-down"></i>
      </div>
    </div> */
