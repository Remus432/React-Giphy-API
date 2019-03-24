import React, { Component } from 'react';
import { render } from 'react-dom';
import Gifs from "./Gifs";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {gifs: [], gifArr: []};
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=1vOByFNPZneRR6oUW44GANLopFTDZ2i3")
      .then(res => res.json())
      .then(data => {
        // Map over gifs
        let iterGifs = data.data.map(gif => {
          return gif.images.original.url;
        })
        // Update state
        setTimeout(() => {
          this.setState({gifs: iterGifs});
        }, 800);
        
        console.log(this.state.gifs);
      });
  }

  render() {
    return (
      <div>
        <Gifs gifs={this.state.gifs}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
