import React , {Component} from 'react'
import navBarData from './NavBarData.js'
import NavSubSub from './NavSubSub.js'

export default class NavBar extends Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.createDrop = this.createDrop.bind(this)


        this.state = {
            navCategories: null,
            renderMe: null,
            subTarget: null,
            subStore: []
        }
    }

    handleClick(event) {
        this.createDrop(event.target.className)
    }

    /*
    NavSub should just render the list of
    */



    //currently createSubDrop works sort of.
    // might have to consider moving all of createDrop in render...
    // --- but really. now I need to figure out why belts & suspenders renders //for all the clothing & accessories sub categories when Accessories is pfflegg

    createDrop(target) { // run createDrop method, taking the className of the ojbect clicked as an argument
        let renderDrop; // declare renderDrop
        navBarData.map(cat => { // map over navBarData.js set cat as each iteration (which is a category).
            if(cat.category == target) { // run all the next bit of code if the target category is the current iteration
                renderDrop = (

                <ul key={cat.category}>
                    {cat.sub_categories.map(sub => {
                        this.state.subStore.push(sub)
                        return (
                            <li className="sub-cat" key={sub.name}>
                                <span className={sub.name} onClick={this.handleClickSub}>
                                    {sub.name}
                                </span>
                            </li>
                        )})}
                </ul>

                )
            }
            return (renderDrop)
        })
        this.setState({renderMe: renderDrop})
    }

    render() {
        return (
            <div className="nav-bar-outer">
                {this.state.renderMe}
            </div>
        )
    }
}
