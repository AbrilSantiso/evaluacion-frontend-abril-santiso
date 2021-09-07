import { Component } from "react";

export default class Opciones extends Component {


  render (){
    const { opcionA, opcionB, handleClick} = this.props;
    return (
        
        <div className="opciones">
         <div className= "opcion">
         <button id="A" className="botones"  onClick={() => handleClick("a")}>A</button>
         <h2>{opcionA}</h2>
         </div>
         <div className= "opcion">
         <button id="B" className="botones" onClick={() => handleClick("b")}>B</button>
         <h2>{opcionB}</h2>
         </div>
        </div>
    );
  };
};