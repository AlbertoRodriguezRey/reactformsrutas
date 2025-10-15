import { Component } from "react";

class Cine extends Component{
    render() {
        return (<div>
            <h1 style={{color: "blue"}}>
                Esto es cine...
            </h1>
            <img src="https://pbs.twimg.com/media/FiMd8cTWAAwdoWu.jpg:large"
            style={{width: "150px", height: "150px"}}
            alt="Cine"/>
        </div>)
    }
}

export default Cine;