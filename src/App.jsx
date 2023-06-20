import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Carousels from './Carousels';
import "./App.css"
import Footers from "./Footers";
import Times from "./Times";
import Navbars from "./Navbars";
import Banner from "./Banner";





export default function App() {
  return (
    <div>
      <Header></Header>
      <Navbars></Navbars>
      <Carousels></Carousels>
      <Banner></Banner>
      <Times></Times>
      <Footers></Footers>
    </div>
  )
}

