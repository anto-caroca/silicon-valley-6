import '../App.css';
import React, { Component } from 'react';
import '../App';

 class Buttons extends Component {
    render(){
        return(
        <div  id="grupoBotones">
            <i className="fas fa-angle-left"></i>
            <button type="button" className="btn btn font-weight-bold">kittens</button>
            <button type="button" className="btn btn-secondary font-weight-bold">felines</button>
            <button type="button" className="btn btn-success font-weight-bold">DIY</button>
            <button type="button" className="btn btn-secondary font-weight-bold">breeds</button>
            <button type="button" className="btn btn  font-weight-bold">funny</button>
            <button type="button" className="btn btn-info font-weight-bold">white</button>
            <button type="button" className="btn btn-light font-weight-bold">stuff</button>
            <button type="button" className="btn btn-dark font-weight-bold">cute</button>
            <button type="button" className="btn btn font-weight-bold">kittens</button>
            <button type="button" className="btn btn-secondary font-weight-bold">felines</button>
            <button type="button" className="btn btn-success font-weight-bold">toys</button>
            <button type="button" className="btn btn-secondary font-weight-bold">breeds</button>
            <button type="button" className="btn btn  font-weight-bold">funny</button>
            <button type="button" className="btn btn-info font-weight-bold">white</button>
            <button type="button" className="btn btn-light font-weight-bold">stuff</button>
            <button type="button" className="btn btn-dark font-weight-bold">cute</button>
            <i className="fas fa-angle-right"></i>
        </div>
        )

    }

}

export default Buttons;