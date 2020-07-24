import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button
} from 'reactstrap';
import { AuthContext } from '../../App';

const NavbarComp = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {state, dispatch} = useContext(AuthContext)

  return (
    <div>
      <Navbar color="success" light expand="md">
        <NavbarBrand href="/">BECERIN</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/produk">Produk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/barang">Barang</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button color="success"
            onClick={() => 
            dispatch({
              type: "LOGOUT"
            })}>
              {state.isAuthenticated && (
                <NavLink>LOG OUT</NavLink>
              )}
            </Button>
          </NavbarText>
        </Collapse>
        </Navbar>
    </div>
  );
}

export default NavbarComp