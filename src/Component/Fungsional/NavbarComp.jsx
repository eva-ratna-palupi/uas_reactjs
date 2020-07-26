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

function NavbarComp() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


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
            <Button color="success">
              LOG OUT
            </Button>
          </NavbarText>
        </Collapse>
        </Navbar>
    </div>
  );
}

export default NavbarComp