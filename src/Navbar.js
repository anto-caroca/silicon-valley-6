import './App.css';
import React, { Component } from 'react';
import './App';
 class Navbar extends Component {
    render(){
        return(
            <div className="d-flex align-items-center" id="div">
                <div className="box1">
                    <div className="input-group">
                        <i className="fab fa-pinterest" id="iconPinterest"></i>
                        <input type="text" className="form-control" aria-label="Text input with dropdown button" id="searchPin"/>
                        <i id="lupa" className="fas fa-search" ></i>
                        <button type="button" id="close" className="close" aria-label="Close" >
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All pins</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item font-weight-bold" href="/">All pins</a>
                                <a className="dropdown-item" href="/">Your pins</a>
                                <a className="dropdown-item" href="/">Product pins</a>                       
                                <a className="dropdown-item" href="/">People</a>
                                <a className="dropdown-item" href="/">Boards</a>
                            </div>
                        </div>
                  </div>
                </div>    
                <div className="box2">
                    <div className="links">
                        <p>Home</p>
                        <p>Following</p>
                        <p>Explore</p>
                        <i className="fas fa-user-circle" id="userIcon"></i>
                        <a target="_blank" href="/"><p>Antonella</p></a>
                    </div>        
                </div>   
                <div className="box3">    
                    <div className="" id="iconoFinal"> 
                        <i className="fas fa-comment-dots"></i>
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>   
            </div>
        
        )
    }
  }
  
  export default Navbar; 

  