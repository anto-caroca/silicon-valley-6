import React, { Component } from 'react';
import './App.css';

//const DEFAULT_QUERY = 'cats';
//const API = `https://pixabay.com/api/?key=9821919-eb38392f2349a770434b8830a&q=${DEFAULT_QUERY}&image_type=photo`;

class Pin extends Component {

    constructor () {
          super();
          this.state = { 
                data: []
                
             }
    }

    componentWillMount() {
        this.getData();
    }
        
    getData(){
       let data = fetch(`https://pixabay.com/api/?key=9821919-eb38392f2349a770434b8830a&q=yellow+flowers&image_type=photo`)
            .then(res => {
                res.json().then((resp) => {
                    console.log('ver ' + resp.movies)
                    this.setState({data: resp.movies})
                })
            })  
    }
    
    
    render() {
        return (
          <div></div>
        )
        }
    }

export default Pin;
