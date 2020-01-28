import React, { Component } from 'react'


export default class HomePage extends Component {
    render() {
        return (
            <div className="homePage-container flex column align-center">
              <h1>Hello Moshe</h1> 
              <p>Coins: 100</p>
              <p>BTC: 0.000156544</p> 
            </div>
        )
    }
}
