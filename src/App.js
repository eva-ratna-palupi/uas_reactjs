import React from 'react';
import NavbarComp from '../src/Component/Fungsional/NavbarComp'
import Home from '../src/Component/Fungsional/Home'
import ListComp from './Component/Class/ListComp';
import AboutComp from '../Component/Fungsional/AboutComp';


const App = () =>{
  
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/produk" component={ListComp}/>
      <Route exact path="/about" component={AboutComp}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
