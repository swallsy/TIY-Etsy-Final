import React , {Component} from 'react'
import navBarData from './NavBarData.js'
import NavSubSub from './NavSubSub.js'

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.handleClickSub = this.handleClickSub.bind(this)

        this.state = {
            isClickedSub: null
        }

    }

    handleClickSub(event) {
        if(event.target.className === this.state.isClickedSub) {
            this.setState({isClickedSub: null})
        }
        else {
            this.setState({isClickedSub: event.target.className})
        }
    }


    render() {
        let renderSubCat;
        if(this.props.clicked) { // render only if there's a click
            renderSubCat = navBarData.map(cat => {
                if(cat.category == this.props.clicked) { // for each category, if it's clicked display this:
                    return (

                        <ul key={cat.category} className="sub-ul">
                            {cat.sub_categories.map(sub => {
                                return (
                                    <li key={sub.name} className="sub-cat" >
                                         <span className={sub.name} onClick={this.handleClickSub}>
                                            {sub.name}
                                        </span>
                                        <ul className="sub-sub-ul">
                                            <NavSubSub dataLoc={sub} ogClicked={this.props.clicked} clickedSub={this.state.isClickedSub}/>
                                        </ul>
                                    </li>
                                )})}
                        </ul>

                    )
                }
            })
        }

        return (
            <div className="nav-bar-outer">
                {renderSubCat}
            </div>
        )
    }
}
