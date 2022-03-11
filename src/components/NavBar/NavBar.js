import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { useGetUserQuery } from "../../app/services/users";
import Spinner from "../Spinner";

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: userData } = useGetUserQuery(user.id);

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
      <Collapse navbar isOpen={open} style={{ justifyContent: "flex-end" }}>
        <Nav navbar>
          {/* <Form className="align-self-center ">
            <Col md={12}>
              <Input
                placeholder="Buscar"
                name="searchInput"
                type="search"
                className="rounded-pill"
              />
            </Col>
          </Form> */}
          <NavItem>
            <Link className="nav-link" to="/red">
              {icons.red} Red
            </Link>
          </NavItem>
          <Link className="nav-link" style={{ color: "whitesmoke" }} to="/user">
            Perfil
          </Link>
          <button
            className="btn nav-link"
            style={{ color: "whitesmoke" }}
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
