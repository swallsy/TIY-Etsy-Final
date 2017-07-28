import React, { Component } from 'react';
import '../../../styles/NavBar.css';
import navBarData from './NavBarData.js'
import NavSub from './NavSub.js'

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.handleHover = this.handleHover.bind(this)

        this.state = {
            isHovered: null
        }

    }

    handleHover(event) {
        if(event.target.className === this.state.isHovered) {
            this.setState({isHovered: null})
        }
        else {
            this.setState({isHovered: event.target.className})
        }
    }

    render() {
        let navCategories = navBarData.map(cat => { // create main categories
            return (
                <li key={cat.category} className="navbar-item">
                    <span  className={cat.category} onMouseEnter={this.handleHover}>
                        {cat.category}
                    </span>
                    <NavSub hovered={this.state.isHovered}/>
                </li>
            )
        })

        return(
            <ul id="navbar">
                {navCategories}
            </ul>
        )
    }
}
