import React, { Component } from 'react';
import '../../../styles/NavBar.css';
import navBarData from './NavBarData.js'

export default class Nav extends Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleClickSub = this.handleClickSub.bind(this)
        this.createDrop = this.createDrop.bind(this)
        this.createSubDrop = this.createSubDrop.bind(this)

        this.state = {
            navCategories: null,
            renderMe: null,
            subTarget: null
        }
    }

    handleClick(event) {
        this.createDrop(event.target.className)
    }

    handleClickSub(event) {
        this.setState({subTarget: event.target.className})
    }

    createSubDrop(target, sub) {
        console.log("createSubDrop runs");
        console.log("and target is: " + target);
        let renderSub = sub.map(sub_sub => {
            if(((sub_sub.name) + " navbar-item") == target) {
                return(
                    <li key={sub_sub.name}><a href={sub_sub.link}>{sub_sub.name}</a></li>
                )
            }
        })
        return renderSub
    }


    // need to find a way to get creaSubDrop to only run when clicked, but it needs info nested deep in the .map of createDrop...hmmmph

    //        (category)
    createDrop(target) {
        let renderDrop;
        navBarData.map(cat => {
            if(((cat.category) + " navbar-item") == target) {
                console.log("that equals other thing");
                renderDrop = (

                <ul key={cat.category}>
                    {cat.sub_categories.map(sub => {
                        return (

                            <li className={((sub.sub_sub_category) + " sub-cat")} key={sub.name} onClick={this.handleClickSub}>{sub.name}
                                <ul className="sub-sub-ul" className={((sub.sub) + " navbar-item")}>
                                    {this.createSubDrop(this.state.subTarget, sub.sub_sub_categories)}
                                </ul>
                            </li>

                        )
                    })}
                </ul>

                )
            }
            console.log(renderDrop);
            return (renderDrop)
        })
        console.log(renderDrop);
        this.setState({renderMe: renderDrop})
    }

    render() {
        let navCategories = navBarData.map(cat => {
            return (
                <li key={cat.category} className={((cat.category) + " navbar-item")} onClick={this.handleClick}>
                    {cat.category}
                    <ul className="dropdown-ul">
                        {this.state.renderMe}
                    </ul>
                </li>
            )
        })

        return (
            <div className="nav-bar-outer">
                <ul className="nav-bar">{navCategories}
                </ul>
            </div>
        )
    }
}
