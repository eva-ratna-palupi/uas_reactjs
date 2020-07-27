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

            <div class="hero-wrap hero-bread" style="background-image: url('images/bg_1.jpg');">
                <div class="container">
                    <div class="row no-gutters slider-text align-items-center justify-content-center">
                        <div class="col-md-9 ftco-animate text-center">
                            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Products</span></p>
                            <h1 class="mb-0 bread">Products</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
