import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import './CSS/BootstrapComp.css'
import logo from '../Gambar/be.png';

class BootstrapComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="display-4"><img src={logo} className="App-logo" alt="logo" /></h1>
                    <p className="text-info">Created by: Eva Ratna Palupi</p>
                </header>
            </div>


        )
    }

}

export default BootstrapComp