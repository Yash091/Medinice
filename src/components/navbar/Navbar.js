import { React, useState , useEffect , useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { AppContext } from "../../context/Context";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const Navbar = () => {

  const navigate = useNavigate()
  const {userData , setUserData} = useContext(AppContext);
  
  const verticalNav = (e) => {
    
    const nav = document.querySelector(".nav-links-horizontal");
    nav.classList.toggle("responsive");
    const temp = document.querySelector("#nav-link2");
    temp.classList.toggle("open");
  };
  
  const handleDelete = (e) => {
    window.localStorage.clear();
    setUserData(null);
    navigate("/");
  }

  return (
    <div>
      <div className="Modal-container">{/* <LoginModal /> */}</div>
      <header>
        <div className="navbar">
          <div className="logo">
            {/* <img src={navpic} alt="shubhwed logo" /> */}
            <Link to="/">
              <span className="medi">Medi</span>
              <span className="nice">nice</span>
            </Link>
            <div
              className="icon"
              onClick={(e) => {
                verticalNav(e);
              }}
            >
              <i
                className="fa fa-bars"
                style={{ fontSize: "3rem", color: "#49516f" }}
              ></i>
            </div>
          </div>
          <div className="nav-links-horizontal">
            <ul
              className="links-horizontal"
              style={{ margin: "0", padding: "0" }}
            >
              <li>
                <Link to="/">
                  <span className="home-span">Home</span>
                </Link>
              </li>
              <li>
                <HashLink to="#services">Services</HashLink>
              </li>
              <li>
                <HashLink to="#meet-team">Meet Our Specialists</HashLink>
              </li>
              <li>
                <HashLink to="#why">Why Choose Us?</HashLink>
              </li>
              <li>
                <HashLink to="/contact">Contact Us</HashLink>
              </li>
              <li>
                {
                  userData ? (
                    userData?.designation === "doctor" ?
                      <>
                        <p className="profile">
                          <Menu maxW="10px">
                            <MenuButton>
                              <Avatar
                                size="md"
                                src={userData?.picture}
                                name={userData?.name}
                              />
                            </MenuButton>
                            <MenuList maxW="inherit">
                              <MenuItem maxW="inherit">
                                <Link to="/doctor">Your Profile</Link>
                              </MenuItem>
                              <MenuItem maxW="inherit" onClick={()=>{handleDelete()}}>
                                Logout
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </p>
                      </>
                      : 
                      userData?.designation === "patient" ?
                        <>
                          <p className="profile">
                            <Menu maxW="10px">
                              <MenuButton>
                                <Avatar
                                  size="md"
                                  name={userData?.name}
                                />
                              </MenuButton>
                              <MenuList maxW="inherit">
                                <MenuItem maxW="inherit">
                                  <Link to="/patient">Your Profile</Link>
                                </MenuItem>
                                <MenuItem maxW="inherit">
                                  <Link to="/patientlandingpage">Find your DOCMATES</Link>
                                </MenuItem>
                                <MenuItem maxW="inherit" onClick={()=>{handleDelete()}}>
                                  Logout
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </p>
                        </>
                        :
                        <>
                          <p className="profile">
                            <Menu maxW="10px">
                              <MenuButton>
                                <Avatar
                                  size="md"
                                  name={userData?.name}
                                />
                              </MenuButton>
                              <MenuList maxW="inherit">
                                <MenuItem maxW="inherit">
                                  <Link to="/admin">Your Profile</Link>
                                </MenuItem>
                                <MenuItem maxW="inherit" onClick={()=>{handleDelete()}}>
                                  Logout
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </p>
                        </>
                  ) : (
                  <Link to="/login">
                    <p className="login-span">
                      Login
                    </p>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;