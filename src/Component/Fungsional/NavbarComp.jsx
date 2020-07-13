import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import BootstrapComp from '../Class/BootstrapComp'

const NavbarComp = (props) => {

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Becer.in</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/produk">Produk</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/keranjang">Keranjang</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/tentang">Tentang</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Cari Disini</NavbarText>
            </Navbar>
            <BootstrapComp/>
            
        </div>
    );
}

export default NavbarComp;