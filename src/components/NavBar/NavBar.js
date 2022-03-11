import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "./../../features/auth/authSlice";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavItem,
  Nav,
  NavbarToggler,
  Form,
  Col,
  Input,
} from "reactstrap";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdDashboard, MdGroups, MdGames } from "react-icons/md";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const icons = {
    logo: <MdGames />,
    search: <AiOutlineSearch />,
    home: <AiFillHome />,
    red: <MdDashboard />,
    amigos: <FaUserFriends />,
    grupos: <MdGroups />,
  };
  const [open, setOpen] = useState(false);
  return (
    <Navbar expand="sm" dark className="NavBar align-middle">
      <Link className="navbar-brand px-2" style={{ fontSize: "2rem" }} to="/">
        {icons.logo}nGamers
      </Link>
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
          <button
            className="btn nav-link mx-auto"
            style={{ marginLeft: "auto", color: "whitesmoke" }}
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </Nav>

        <Link
          className="nav-link"
          style={{ marginLeft: "auto", color: "whitesmoke" }}
          to="/user"
        >
          Perfil
        </Link>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
