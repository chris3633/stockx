import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import { Navbar } from 'react-bootstrap'
import logo from '../assets/navbarlogo.png'
import { useAuth } from '../contexts/AuthContext'
import SubMenu from '../components/SubMenu'
import app from 'firebase'
import '../App.css'

const Nav = styled.div`
  background: #353a3f;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #353a3f;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { currentUser } = useAuth()

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <Navbar.Brand href="/" className=".navigation-brand ">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/"></Navbar.Brand>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
              {/*<Link to='/'>
              <button onClick={() => app.auth().signOut()}>Log Out</button></Link>*/}
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}

          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
