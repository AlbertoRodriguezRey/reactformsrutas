import React, { Component } from 'react'

export default class TablaMultiplicarv2 extends Component {

    cajaNumero = React.createRef();

    generarTabla = (event) => {
        event.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];

        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            aux.push(resultado);
        }

        this.setState({
            tabla: aux
        })
    }

    generarRandom = () => {
        const numeros = [];
        for (let i = 0; i < 5; i++) {
            const numero = Math.floor(Math.random() * 50) + 1;
            numeros.push(numero);
        }
        this.setState({ numeros });
    }

    componentDidMount() {
        this.generarRandom();
    }

    state = {
        tabla: [],
        numeros: [],
    }

    render() {
        return (
            <div>
                <h1>Tabla de multiplicar</h1>
                <hr />
                <form onSubmit={this.generarTabla}>
                    <label>Elige un número: </label>
                    <select ref={this.cajaNumero}>
                        {this.state.numeros.map((numero, index) => {
                            return <option key={index} value={numero}>{numero}</option>
                        })
                        }
                    </select>
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

