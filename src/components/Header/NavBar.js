import React, { Component } from 'react';
import '../../styles/Nav.css';

export default class Nav extends Component {
    constructor(props){
        super(props)

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)

        this.state = {
            isVisible: false
        }
    }

    handleMouseEnter(event) {
        this.setState({isVisible: true})
    }

    handleMouseLeave(event) {
        this.setState({isVisible: false})
    }

    render() {
        return (
            <div>
                <h5 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>v Dropdown v</h5>
                <ul className={"dropdown-display" + (this.state.isVisible ? " show": "")}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        )
    }
}
