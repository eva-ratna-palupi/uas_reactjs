import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavbarComp from '../src/Component/Fungsional/NavbarComp';
import Homepage from '../src/Component/Fungsional/Homepage'
import ListComp from './Component/Class/ListComp';
import AboutComp from '../src/Component/Fungsional/AboutComp';
import Produk from '../src/Component/Class/Produk';
import TambahComp from './Component/Class/TambahComp';
import Login from './Component/Fungsional/Login';
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
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("nama_user", JSON.stringify(action.payload.nama_user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        nama_user: action.payload.nama_user,
        token: action.payload.token
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        nama_user: null
      }
      default:
        return state;

  }
}

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <BrowserRouter>
      
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/"
              }} 
            /> :
            <Redirect
              to={{
                pathname: "/home"
              }} />
      }

        <NavbarComp />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={AboutComp} />
        <Route exact path="/produk" component={Produk} />
        <Route exact path="/barang" component={ListComp} />
        <Route exact path="/barang/tambah" component={TambahComp} />
        <Route exact path="/barang/edit" component={EditComp}/>

        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
