import React, { Component } from 'react';
import '../../../styles/NavBar.css';

export default class Nav extends Component {
    constructor(props){
        super(props)

        this.handleMouseEnterTop = this.handleMouseEnterTop.bind(this)
        this.handleMouseLeaveTop = this.handleMouseLeaveTop.bind(this)
        this.handleMouseEnterSub = this.handleMouseEnterSub.bind(this)
        this.handleMouseLeaveSub = this.handleMouseLeaveSub.bind(this)

        this.state = {
            isVisibleTop: false,
            isVisibleSub: false
        }
    }

    handleMouseEnterTop(event) {
        this.setState({isVisibleTop: true})
    }

    handleMouseLeaveTop(event) {
        this.setState({isVisibleTop: false})
    }

    handleMouseEnterSub(event) {
        this.setState({isVisibleSub: true})
    }

    handleMouseLeaveSub(event) {
        this.setState({isVisibleTop: false})
    }

    navCreator(){
        
    }

    render() {
        return (
            <div className="navbar-item" onMouseEnter={this.handleMouseEnterTop} onMouseLeave={this.handleMouseLeaveTop}>

                <span>v Category 1 v</span>

                <ul className={"dropdown-display-top" + (this.state.isVisibleTop ? " show-top": "")}>

                    <li onMouseEnter={this.handleMouseEnterSub} onMouseLeave={this.handleMouseLeaveSub}><span>Item 1</span>
                        <ul className={"dropdown-display-sub " + (this.state.isVisibleSub ? " show-sub": "")}>
                            <li>Subitem 1</li>
                            <li>Subitem 2</li>
                            <li>Subitem 3</li>
                        </ul>
                    </li>


                    <li onMouseEnter={this.handleMouseEnterSub} onMouseLeave={this.handleMouseLeaveSub}><span>Item 2</span>

                        <ul className={"dropdown-display-sub " + (this.state.isVisibleSub ? " show-sub": "")}>
                            <li>Subitem 1</li>
                            <li>Subitem 2</li>
                            <li>Subitem 3</li>
                        </ul>
                    </li>

                    <li onMouseEnter={this.handleMouseEnterSub} onMouseLeave={this.handleMouseLeaveSub}><span>Item 3</span>
                        <ul className={"dropdown-display-sub " + (this.state.isVisibleSub ? " show-sub": "")}>
                            <li>Subitem 1</li>
                            <li>Subitem 2</li>
                            <li>Subitem 3</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
