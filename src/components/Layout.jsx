import { Component } from "react";
import data from "./data.json"
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

export default class Layout extends Component {

  state = {
      contador: null,
      seleccionPrevia: "",
      historial: []
  };

  componentWillMount(){
    this.setState({ contador: 0 });
  };
  componentDidMount(){
    Swal.fire({
   
    })
  }
  handleClick = (opcion) =>{
// Si ya llegamos al final, no actualizamos más el contador, ni el historial ni a seleccion previa
   if(this.state.contador >=7){
     alert("Fin!");
   }else{
   this.setState({seleccionPrevia: opcion});

   this.state.historial.push(opcion);

  this.actualizarContador(opcion);
   };
  };
  
  actualizarContador = (opcion) => {

    //Si la opcion es A
    if(opcion == "A"){
      if(this.state.seleccionPrevia == "A"){
       this.setState({contador: this.state.contador + 2});
      }else{
       this.setState({contador: this.state.contador + 1});
      };

    // Si la opcion es B
    }else{
     if(this.state.seleccionPrevia == "A"){
       this.setState({contador: this.state.contador + 3});
    }else{
     this.setState({contador: this.state.contador + 2});
    };
   };
   
  };

  render (){
    return (
        <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones opcionA={data[this.state.contador].opciones.a} opcionB={data[this.state.contador].opciones.b} handleClick={this.handleClick}/>
        <Recordatorio seleccionPrevia={this.state.seleccionPrevia} historial={this.state.historial}/>
        </div>
    );
  };
};

