import React, { Component } from 'react';

export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.renderMe = this.renderMe.bind(this)

    }



    renderMe(){
        let renderMe = null;
        if(this.props.type === "category"){
            console.log(this.props.categories);
            renderMe = (
                <h1>{this.props.categories}</h1>
            )
        }
        else if(this.props.type === "gifts"){
            renderMe = (
                <h1>Gifts!</h1>
            )
        }
        return renderMe
    }

    render() {
        return (
            <div>
                {this.renderMe()}
            </div>
        )
    }
}
