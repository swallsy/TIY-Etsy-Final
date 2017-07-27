import React, { Component } from 'react';
import '../../../styles/NavBar.css';
import NavSub from './NavSub.js'

export default class NavBar extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return(
            <NavSub />
        )
    }
}
