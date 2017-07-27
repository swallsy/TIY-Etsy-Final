import React, { Component } from 'react';
import '../../../styles/NavBar.css';
import navBarData from './NavBarData.js'
import NavSub from './NavSub.js'

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            isClicked: null
        }

    }

    handleClick(event) {
        if(event.target.className === this.state.isClicked) {
            this.setState({isClicked: null})
        }
        else {
            this.setState({isClicked: event.target.className})
        }
    }

    render() {
        let navCategories = navBarData.map(cat => { // create main categories
            return (
                <li key={cat.category} className="navbar-item">
                    <span  className={cat.category} onClick={this.handleClick}>
                        {cat.category}
                    </span>
                    <ul className="dropdown-ul">
                        <NavSub clicked={this.state.isClicked}/>
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
