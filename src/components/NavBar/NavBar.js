import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
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
  const [open, setOpen] = useState(true);
  return (
    <>
      <Navbar expand="sm" dark className="NavBar align-middle">
        <NavbarBrand href="/">LOGO</NavbarBrand>
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
              <NavLink href="">{icons.home} Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">{icons.red} Red</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">{icons.amigos} Amigos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">{icons.grupos} Grupos</NavLink>
            </NavItem>
          </Nav>
          <NavLink style={{ marginLeft: "auto", color: "whitesmoke" }} href="">
            Perfil
          </NavLink>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
