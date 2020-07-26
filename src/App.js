import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavbarComp from '../src/Component/Fungsional/NavbarComp';
import Homepage from '../src/Component/Fungsional/Homepage'
import ListComp from './Component/Class/ListComp';
import AboutComp from '../src/Component/Fungsional/AboutComp';
import Produk from '../src/Component/Class/Produk';
import TambahComp from './Component/Class/TambahComp';
//import Login from './Component/Fungsional/Login';
import Register from './Component/Fungsional/Register';
import EditComp from './Component/Class/EditComp';

//Context
export const AuthContext = createContext()

//initial state
const initialState = {
  isAuthenticated: false,
  nama_user: null,
  token: null
}

//fungsi reducer


function App() {

  return (
    <BrowserRouter>

<NavbarComp />
      <Switch>
        
          
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={AboutComp} />
          <Route exact path="/produk" component={Produk} />
          <Route exact path="/barang" component={ListComp} />
          <Route exact path="/barang/tambah" component={TambahComp} />
          <Route exact path="/barang/edit" component={EditComp} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
