import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarComp from '../src/Component/Fungsional/NavbarComp';
//import Home from '../src/Component/Fungsional/Home'
import Homepage from '../src/Component/Fungsional/Homepage'
import ListComp from './Component/Class/ListComp';
import AboutComp from '../src/Component/Fungsional/AboutComp';
import Produk from '../src/Component/Class/Produk';
import TambahComp from './Component/Class/TambahComp';
import Login from '../src/Component/Fungsional/Login';
import Register from './Component/Fungsional/Register';


export const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload.user
      }
      default:
        return state;

  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <Homepage/>
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/login"
              }} />:
            <Redirect
              to={{
                pathname: "/home"
              }} />
      }
        </AuthContext.Provider>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={AboutComp} />
        <Route exact path="/produk" component={Produk} />
        <Route exact path="/barang" component={ListComp} />
        <Route exact path="/barang/tambah" component={TambahComp} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
