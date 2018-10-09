import '../App.css';
import React, { Component } from 'react';
import '../App';

 class Modal extends Component {
    render(){
        return(
        <div  className="modal">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                ...
            </div>
            </div>
            </div>
        </div>
        )

    }

}

export default Modal;