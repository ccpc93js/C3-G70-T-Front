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
  Button,
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
      <Navbar expand="sm" light className="NavBar">
        <NavbarBrand href="/">LOGO</NavbarBrand>
        <Button onClick={() => setOpen(!open)} />
        <Collapse navbar isOpen={open}>
          <Nav className="me-auto" navbar>
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
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                MiCuenta
              </DropdownToggle>
              <DropdownMenu dark>
                <DropdownItem>Modificar perfil</DropdownItem>
                <DropdownItem>Cerrar sesion</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
