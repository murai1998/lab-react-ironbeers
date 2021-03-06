import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';

class RandomBeer extends Component {
  state = {
    beers: 0
  };
  async componentDidMount() {
    let res = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers/random'
    );
    // console.log(res);

    this.setState({
      beers: res.data
    });
  }
  render() {
    return (
      <div>
        <Link to="/">
          <img
            className="house"
            width="170vw"
            height="150vh"
            src="https://www.pinclipart.com/picdir/big/405-4059078_png-file-svg-transparent-white-home-button-clipart.png"
            alt="home-button"
          />
        </Link>
        <div className="wholePage">
          <img src={this.state.beers.image_url} alt="single beer" />
          <div className="nameHead">
            <h1>{this.state.beers.name}</h1>
            <p>{this.state.beers.attenuation_level}</p>
          </div>
          <div className="date">
            <h2>{this.state.beers.tagline}</h2>
            <p>{this.state.beers.first_brewed}</p>
          </div>
          <p className="descript">{this.state.beers.description}</p>
          <p className="closer">{this.state.beers.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
