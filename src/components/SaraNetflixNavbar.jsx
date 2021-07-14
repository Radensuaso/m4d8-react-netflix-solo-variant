import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export default class SaraNetflixNavbar extends Component {
  state = {
    query: "",
  };
  handleSearch = () => {
    this.props.searchCallback(this.state.query.toLowerCase());
    console.log(this.state.query.toLowerCase());
  };
  render() {
    return (
      <Navbar
        className="bg-dark-netflix"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src="../../public/assets/netflix_logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
              <Button variant="outline-success" onClick={this.handleSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
