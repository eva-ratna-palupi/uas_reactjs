import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComp from '../src/Component/Fungsional/NavbarComp';
//import Home from '../src/Component/Fungsional/Home'
import Homepage from '../src/Component/Fungsional/Homepage'
import ListComp from './Component/Class/ListComp';
import AboutComp from '../src/Component/Fungsional/AboutComp';
import Produk from '../src/Component/Class/Produk';

const App = () =>{
  
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/about" component={AboutComp}/>
      <Route exact path="/produk" component={Produk}/>
      <Route exact path="/barang" component={ListComp}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
