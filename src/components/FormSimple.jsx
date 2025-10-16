import React, { Component } from 'react'

export default class FormSimple extends Component {
    //NECESITAMOS CREAR UNA VARIABLE DE REFERENCIA PARA
    //CADA OBJETO DE FORUMLARIO
    cajaNombre = React.createRef();

    peticionFormulario = (event) => {
        //DETENEMOS EL SUBMIT DEL FORMULARIO
        event.preventDefault();
        console.log("Peticion lista!!")
        //RECUPERAR EL VALOR DE UN OBJETO React
        let nombre = this.cajaNombre.current.value;
        console.log("El nombre es: " + nombre);
        //ACTUALIZAR EL ESTADO DEL COMPONENTE
        this.setState({
            nombre: nombre
        })
    }

    state = {
        nombre: ""
    }

    render() {
        return (
            <div>
                <h1>Formulario Simple React</h1>
                <h2 style={{color:"blue"}}>{this.state.nombre}</h2>
                <form onSubmit={this.peticionFormulario}>
                    <label>Nombre: </label>
                    <input type='text' ref={this.cajaNombre}/>
                    <button>Realizar petición</button>
                </form>
            </div>
        )
    }
}
