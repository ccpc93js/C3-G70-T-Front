import React from "react";
import { Navbar } from "reactstrap";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdDashboard, MdGroups } from "react-icons/md";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <Navbar className="NavBar">
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
      </Navbar>
    </>
  );
};

export default NavBar;
