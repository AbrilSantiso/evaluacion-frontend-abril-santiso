import { Component } from "react";

export default class Opciones extends Component {

  componentWillMount(){
    this.setState({ contador: 0 });
  };

  render (){
    const { opcionA, opcionB} = this.props;
    return (
        
        <div className="opciones">
         <div className= "opcion">
         <button id="A" className="botones">A</button>
         <h2>{opcionA}</h2>
         </div>
         <div className= "opcion">
         <button id="B" className="botones">B</button>
         <h2>{opcionB}</h2>
         </div>
        </div>
    );
  };
};