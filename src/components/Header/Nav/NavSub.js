import React , {Component} from 'react'
import navBarData from './NavBarData.js'

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



    //currently createSubDrop works sort of.
    // might have to consider moving all of createDrop in render...
    // --- but really. now I need to figure out why belts & suspenders renders //for all the clothing & accessories sub categories when Accessories is pfflegg

    createDrop(target) {
        let renderDrop;
        navBarData.map(cat => {
            if(cat.category == target) {
                console.log("that equals other thing");
                renderDrop = (

                <ul key={cat.category}>
                    {cat.sub_categories.map(sub => {
                        this.state.subStore.push(sub)
                        console.log(sub);
                        console.log(sub.sub_sub_category);
                        return (
                                <div className="sub-cat" key={sub.name}>
                                    <span className={sub.name} onClick={this.handleClickSub}>
                                        {sub.name}
                                    </span>
                                </div>
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
                <li key={cat.category} className="navbar-item">
                    <span  className={cat.category} onClick={this.handleClick}>{cat.category}</span>
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
