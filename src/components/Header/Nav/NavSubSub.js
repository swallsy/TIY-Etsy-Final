import React, { Component } from 'react';

export default class NavSubSub extends Component {
    constructor(props){
        super(props)

        this.handleClickSub = this.handleClickSub.bind(this)
        this.createSubDrop = this.createSubDrop.bind(this)

    }

    handleClickSub(event) {
        this.setState({subStore: []})
        this.createSubDrop(event.target.className)
    }

    createSubDrop(target) {
        console.log("createSubDrop runs");
        console.log("and target is: " + target);
        let renderSub = this.state.subStore.map(sub => {
            if(sub.name == target) {
                console.log(sub.name + " was clicked!")
                console.log(sub.sub_sub_categories);
                return(
                    sub.sub_sub_categories.map(sub_sub => {
                        console.log(sub_sub);
                        return (
                            <li key={sub_sub.name}><a href={sub_sub.link}>{sub_sub.name}</a></li>
                        )
                    })

                )
            }
        })
        this.setState({renderMeSub: renderSub})
    }

    render() {
        return(

        )
    }
}
