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
                <div className="card-body">
                    <h5 className="card-title">Hallo kamu sudah punya akun belum?</h5>
                    <p className="card-text">Kalau sudah klik Login dan kalau belum Daftar dulu yuk</p>
                    <a href="#" className="btn btn-primary">Login</a> <a href="#" className="btn btn-success">Daftar</a>
                </div>
                <br/>
                </div>
    );
}

export default Homepage;
