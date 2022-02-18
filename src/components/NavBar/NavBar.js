import React from "react";
import { Navbar, Nav, Dropdown, Avatar } from "rsuite/esm";
import { Input, InputGroup } from "rsuite";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdDashboard, MdGroups } from "react-icons/md";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <Navbar className="NavBar">
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <InputGroup className="search" pullLeft>
          <Input />
          <InputGroup.Addon>
            <AiOutlineSearch />
          </InputGroup.Addon>
        </InputGroup>
        <Nav pullRight>
          <Nav.Item icon={<AiFillHome style={{ marginRight: "5px" }} />}>
            Inicio
          </Nav.Item>
          <Nav.Item icon={<MdDashboard style={{ marginRight: "5px" }} />}>
            Red
          </Nav.Item>
          <Nav.Item icon={<MdGroups style={{ marginRight: "5px" }} />}>
            Grupos
          </Nav.Item>
          <Nav.Item icon={<FaUserFriends style={{ marginRight: "5px" }} />}>
            Amigos
          </Nav.Item>
          <Dropdown
            icon={
              <Avatar
                size="sm"
                circle
                src="https://avatars.githubusercontent.com/u/2797600"
              />
            }
            title="NombrePerfil"
          >
            <Dropdown.Item>Editar Perfil</Dropdown.Item>
            <Dropdown.Item>Cerrar sesion</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
