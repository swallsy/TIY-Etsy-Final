import React, { Component } from 'react';
import navBarData from './NavBarData.js'

export default class NavSubSub extends Component {
    render() {
        let defaultSubCat;
        for(var i=0; i < navBarData.length; i++){
            if(this.props.ogHovered === navBarData[i].category) {
                defaultSubCat = navBarData[i].sub_categories[0]

            }
        }
        let sub = this.props.dataLoc
        let subSubDrop;
        if(sub.name === this.props.hoveredSub) {
            subSubDrop = sub.sub_sub_categories.map(sub_sub => {
                return (
                    <li key={sub_sub.name} className="sub-sub-li"><a href={sub_sub.link}>
                        {sub_sub.name}
                    </a></li>
                )
            })
        }
        else if (!this.props.hoveredSub && defaultSubCat.sub_sub_categories[0]){
            subSubDrop = (
                <li className="sub-sub-li"><a href={defaultSubCat.sub_sub_categories[0].link}>
                    {defaultSubCat.sub_sub_categories[0].name}
                </a></li>
            )
        }
        return(
            <div>
                {subSubDrop}
            </div>
        )
    }
}
