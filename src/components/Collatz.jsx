import React, { Component } from "react";

export default class Collatz extends Component {
    cajaNumero = React.createRef();

    generarCollatz = (event) => {
        event.preventDefault();
        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];

        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }
        this.setState({
            numeros: aux
        })
    };

    state = {
        numeros: [],
    };

    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>
                <form onSubmit={this.generarCollatz}>
                    <label>Introduce un número: </label>
                    <input type="number" ref={this.cajaNumero} />
                    <button>Mostrar conjetura</button>
                    <ul>
                        {this.state.numeros.map((numero, indes) => {
                            return <li key={indes}>{numero}</li>;
                        })}
                    </ul>
                </form>
            </div>
        );
    }
}
