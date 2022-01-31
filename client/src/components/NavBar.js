import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  window.onscroll = changePos;

  function changePos() {
      var header = document.getElementById("navbar");
      if (window.pageYOffset > 70) {
          header.style.position = "fixed";
          header.style.top = "0";
      } else {
          header.style.position = "";
          header.style.top = "";
      }
  }
  return (
    <div>
          <Navbar  expand="lg" className="navbar" id="navbar">
  <Container>
    <Navbar.Brand href="/"><img className="imglogo" src="images/logo.jpg" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="divFlexs">
      <Nav className="">
      <NavLink to="/servicios" className="nav-link">
        <p className="parrNav">SERVICIOS</p>
      </NavLink>

      <NavLink to="/productos" className="nav-link">
        <p className="parrNav">PRODUCTOS</p>
      </NavLink>

      <NavLink to="/proyectos" className="nav-link">
        <p className="parrNav">PROYECTOS</p>
      </NavLink>

      <NavLink to="/nosotros" className="nav-link">
        <p className="parrNav">NOSOTROS</p>
      </NavLink>
      <a className="nav-link" href="#contacto">
        <p className="parrNav">CONTACTO</p>
      </a>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}
