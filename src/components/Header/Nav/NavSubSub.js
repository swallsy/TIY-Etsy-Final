import React, { Component } from 'react';
import navBarData from './NavBarData.js'

export default class NavSubSub extends Component {
    render() {
        let sub = this.props.dataLoc

        let subSubDrop;
        if(sub.name === this.props.clickedSub) {
            console.log(sub.sub_sub_categories);
            subSubDrop = sub.sub_sub_categories.map(sub_sub => {
                return (
                    <li className="sub-sub-li"><a href={sub_sub.link}>
                        {sub_sub.name}
                    </a></li>
                )
            })
        }
        return(
            <div>
                {subSubDrop}
            </div>
        )
    }
}
