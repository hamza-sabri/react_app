import React, { Component, Fragment } from "react";
import Cell from "./cell.jsx";
class Bord extends Component {
  render() {
    // status = {
    //      cells : this._getCells,
    // }
    return (
      <Fragment>
        <div className="bord"></div>
      </Fragment>
    );
  }
  _getCells() {
    const div = React.createElement("div");
    for (let i = 0; i < 9; i++) {
      div.appendChild(<Cell></Cell>);
    }
    return div;
  }
}

export default Bord;
