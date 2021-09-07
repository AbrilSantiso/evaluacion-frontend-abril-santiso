import { Component } from "react";

export default class Recordatorio extends Component {

  render (){
    const { historial, seleccionPrevia} = this.props;
    return (
        <div className="recordatorio">
        <h3>Selección anterior: {seleccionPrevia}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>{historial.map((opcion, i)=>(
          <li key={i + opcion}>{opcion}</li>  
        ))}</ul>

        </div>
    );
  };  
};