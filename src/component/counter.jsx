import React, { Component } from "react";
import './tick_toc.css'
import Bord from './bord.jsx'
class ShopingList extends Component {

  render() {
    return (
      <React.Fragment>
        <h1 className='title'>Tick Toc Toe</h1>
        <h5 className='title small-one'>The turn is on: X</h5>
        <Bord></Bord>
      </React.Fragment>
    );
  }

 
}

export default ShopingList;
