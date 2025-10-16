import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/tablamultiplicar">Tabla de multiplicar</a>
            </li>
            <li>
                <a href="/tablamultiplicarv2">Tabla de multiplicar v2</a>
            </li>
            <li>
                <a href="/collatz">Collatz</a>
            </li>
            <li>
                <a href="/cine">Cine</a>
            </li>
            <li>
                <a href="/musica">Música</a>
            </li>
            <li>
                <a href="/formsimple">Form simple</a>
            </li>
        </ul>
      </div>
    )
  }
}