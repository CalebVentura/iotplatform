import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';
import Coleccion from './Coleccion';

export default class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <Menu/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

