import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Buttons from './Components/Buttons';
import ImgList from './Components/ImgList';


import './App.css';



class App extends Component {

  constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	componentDidMount() {
		fetch('https://api.unsplash.com/photos/?client_id=6d941d1ebb2255c24c2b6903e6bb9e25049f5ae6ffbe08b8c8d8eeeb063336b2')
			.then(res => res.json())
			.then(data => {
				this.setState({ imgs: data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

  render() {
    return (
      <div className="App">
        <Navbar/>
       <Buttons/>
       <div className="main-content">
					<ImgList data={this.state.imgs} />
				</div>
       
      </div>
    );
  }
}

export default App;
