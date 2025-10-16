import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    cajaNumero = React.createRef();

    generarMultiplicacion = (event) => {
        event.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];

        //SI EL VALOR DE cajaNumero es 0, NO HACER NADA
        if (isNaN(numero)) {
            this.setState({
                tabla: []
            })
            return;
        }
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            aux.push(resultado);
        }

        this.setState({
            tabla: aux
        })
    }

    state = {
        tabla: [],
    }

    render() {
        return (
            <div>
                <h1>Tabla de multiplicar</h1>
                <hr />
                <form onSubmit={this.generarMultiplicacion}>
                    <label>Elige un número: </label>
                    <input type="number" ref={this.cajaNumero} />
                    <button>Generar tabla</button>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Operación</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tabla.map((numero, index) => {
                                    return <tr key={index}>
                                        <td>{this.cajaNumero.current.value} * {index + 1}</td>
                                        <td>{numero}</td>
                                    </tr>
                                })   
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

