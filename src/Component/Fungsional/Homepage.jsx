import React from 'react';
import '../Class/CSS/BootstrapComp.css'
import logo from '../Gambar/be.png'

const Homepage = (props) => {
    return (
        <div className="App">
            <header className="App-header" >
                <h1 className="display-4"><img src={logo} className="App-logo" alt="logo" /></h1>
                <p className="text-info">Created by: Eva Ratna Palupi</p>
            </header>
            <br /><br /><br />
            </div>
    );
}

export default Homepage;
