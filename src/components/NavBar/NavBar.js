import React from "react";
<<<<<<< HEAD
import { Navbar, Nav, Avatar } from "rsuite/esm";
import { Input, InputGroup } from "rsuite";
=======
import { Navbar } from "reactstrap";
>>>>>>> origin/dev
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdDashboard, MdGroups } from "react-icons/md";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <Navbar className="NavBar">
<<<<<<< HEAD
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Nav className="search">
          <InputGroup inside>
            <Input />
            <InputGroup.Addon>
              <AiOutlineSearch />
            </InputGroup.Addon>
          </InputGroup>
        </Nav>
        <Nav>
          <Nav.Item
            eventKey="1"
            icon={<AiFillHome style={{ marginRight: "5px" }} />}
          >
            Inicio
          </Nav.Item>
          <Nav.Item
            eventKey="2"
            icon={<MdDashboard style={{ marginRight: "5px" }} />}
          >
            Red
          </Nav.Item>
          <Nav.Item
            eventKey="3"
            icon={<MdGroups style={{ marginRight: "5px" }} />}
          >
            Grupos
          </Nav.Item>
          <Nav.Item
            eventKey="4"
            icon={<FaUserFriends style={{ marginRight: "5px" }} />}
          >
            Amigos
          </Nav.Item>
          <Nav>
            <Nav.Dropdown
              icon={
                <Avatar
                  size="xs"
                  circle
                  src="https://avatars.githubusercontent.com/u/2797600"
                />
              }
              title="NombrePerfil"
            >
              <Nav.Dropdown.Item eventKey="6">Cerrar sesion</Nav.Dropdown.Item>
              <Nav.Dropdown.Item eventKey="7">Editar Perfil</Nav.Dropdown.Item>
            </Nav.Dropdown>
          </Nav>
        </Nav>
=======
        <span href="#">LOGO</span>
        <div className="search">
          <input />
          <div>
            <AiOutlineSearch />
          </div>
        </div>
        <nav>
          <p icon={<AiFillHome style={{ marginRight: "5px" }} />}>Inicio</p>
          <p icon={<MdDashboard style={{ marginRight: "5px" }} />}>Red</p>
          <p icon={<MdGroups style={{ marginRight: "5px" }} />}>Grupos</p>
          <p icon={<FaUserFriends style={{ marginRight: "5px" }} />}>Amigos</p>
          <div
            icon={
              <img
                src="https://avatars.githubusercontent.com/u/2797600"
                alt="avatar"
              />
            }
            title="NombrePerfil"
          >
            <span>Editar Perfil</span>
            <span>Cerrar sesion</span>
          </div>
        </nav>
>>>>>>> origin/dev
      </Navbar>
    </>
  );
};

export default NavBar;
