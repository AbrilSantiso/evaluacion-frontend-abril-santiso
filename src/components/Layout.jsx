import { Component } from "react";
import data from "./data.json"
import Opciones from "./Opciones";

export default class Layout extends Component {

  state = {
      //El contador va a ser el indice del array de daTA EN EL Q NOS encontramos
      // las opciones A van: 1, 3, 5, 7
      // las B: 2, 4, 6, 8
      contador: null,
      seleccionPrevia: ""
  };

  componentWillMount(){
    this.setState({ contador: 0 });
  };

  render (){
    return (
        <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones opcionA="" opcionB=""/>
        </div>
    );
  };
};