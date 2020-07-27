import React, { useContext, useState } from 'react';
import '../Class/CSS/BootstrapComp.css'
import logo from '../Gambar/be.png'
import { AuthContext } from '../../App';

function Homepage() {
    const { state, dispatch } = useContext(AuthContext)

    return (
        <div className="App">
            <header className="App-header" >
                <h1 className="display-4"><img src={logo} className="App-logo" alt="logo" /></h1>
                <p className="text-info">Created by: Eva Ratna Palupi</p>
                <p className="display-3">Hallo, {state.nama_user}</p>
            </header>
            <br /><br /><br />

            
        </div>
    );
}

export default Homepage;
