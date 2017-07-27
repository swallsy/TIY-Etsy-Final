import React, { Component } from 'react';
import '../../../styles/NavBar.css';
import navBarData from './NavBarData.js'
import NavSub from './NavSub.js'

export default class NavBar extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let navCategories = navBarData.map(cat => { // create main categories
            return (
                <li key={cat.category} className="navbar-item">
                    <span  className={cat.category} onClick={this.handleClick}>{cat.category}</span>
                    <ul className="dropdown-ul">
                        <NavSub />
                    </ul>
                </li>
            )
        })

        return(
            <div>
                {navCategories}
            </div>
        )
    }
}
