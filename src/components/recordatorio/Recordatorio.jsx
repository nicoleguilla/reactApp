import React, { Component } from "react";

export default class Recordatorio extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }
  
  render() {
    console.log(this.props);
        const {opcionesPasadas} = this.props;
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {opcionesPasadas}</h3>
        
        <h4>Historial de opciones elegidas: </h4>

        <ol>{
            this.props.arrayOpciones.map((elemento, index)=> {
                return <li key={index}> {elemento}</li>
            })
          }
        </ol>
      </div>
    )
  }
}
