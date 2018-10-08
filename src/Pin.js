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
             
             this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }
        
    getData(){
        fetch(`https://pixabay.com/api/?key=9821919-eb38392f2349a770434b8830a&q=yellow+flowers&image_type=photo`)
            .then((res) => res.json())
            .then((data) => {
               let obj= Object.entries(data.hits)
               let images = obj.forEach(x => console.log(x[1].webformatURL))
                this.setState({data:images})
                
            })
            //.then(res => this.setState({ data: res.data.hits }))
          .catch(err => console.log(err));
              
    }
    
    
    render() {
       
        return (
          
          <div>
              {this.state.data}
              
          </div>
          
        )
        }
    }

export default Pin;