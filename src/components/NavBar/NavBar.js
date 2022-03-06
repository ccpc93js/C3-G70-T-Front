import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  Form,
  Col,
  Input,
} from "reactstrap";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdDashboard, MdGroups } from "react-icons/md";
import "./NavBar.css";

const NavBar = () => {
  const icons = {
    search: <AiOutlineSearch />,
    home: <AiFillHome />,
    red: <MdDashboard />,
    amigos: <FaUserFriends />,
    grupos: <MdGroups />,
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar expand="sm" dark className="NavBar align-middle">
        <NavbarBrand>LOGO</NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!open)} />
        <Collapse navbar isOpen={open}>
          <Nav navbar>
            <Form className="align-self-center ">
              <Col md={12}>
                <Input
                  placeholder="Buscar"
                  name="searchInput"
                  type="search"
                  className="rounded-pill"
                />
              </Col>
            </Form>
            <NavItem>
              <Link className="nav-link" to="/">
                {icons.home} Inicio
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/red">
                {icons.red} Red
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/amigos">
                {icons.amigos} Amigos
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/grupos">
                {icons.grupos} Grupos
              </Link>
            </NavItem>
          </Nav>

          <Link
            className="nav-link"
            style={{ marginLeft: "auto", color: "whitesmoke" }}
            to="/perfil"
          >
            Perfil
          </Link>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
