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
import { CartContext } from '../../CartContext';

const NavbarComp = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {value, setValue} = useContext(CartContext)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React Js</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/produk">Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/barang">Barang</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/class">Class Comp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hook">Hooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/useeffect">Hooks useEffect</NavLink>
            </NavItem>
          
          </Nav>
          <NavbarText>
            <Button color="danger">
              <i className="fa fa-shopping-cart"></i>
              <span className="badge badge-light">{value}</span>
            </Button>
          </NavbarText>
        </Collapse>
        </Navbar>
    </div>
  );
}

export default NavbarComp