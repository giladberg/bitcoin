import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
              <h1>Hello Moshe</h1> 
              <p>Coins: 100</p>
              <p>BTC: 0.000156544</p> 

              <Link to={`/contact`}>
                    Contact List
                </Link>
            </div>
        )
    }
}
