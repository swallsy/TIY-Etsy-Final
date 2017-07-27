import React , {Component} from 'react'
import navBarData from './NavBarData.js'
import NavSubSub from './NavSubSub.js'

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.handleHoverSub = this.handleHoverSub.bind(this)

        this.state = {
            isHoveredSub: null
        }

    }

    handleHoverSub(event) {
        if(event.target.className === this.state.isHoveredSub) {
            this.setState({isHoveredSub: null})
        }
        else {
            this.setState({isHoveredSub: event.target.className})
        }
    }


    render() {
        let renderSubCat;
        if(this.props.hovered) {
            renderSubCat = navBarData.map(cat => {
                if(cat.category === this.props.hovered) {
                    return (

                        <ul key={cat.category} className="sub-ul">
                            {cat.sub_categories.map(sub => {
                                return (
                                    <li key={sub.name} className="sub-cat" >
                                         <span className={sub.name} onMouseEnter={this.handleHoverSub}>
                                            {sub.name}
                                        </span><i className="fa fa-chevron-right" />
                                        <ul className="sub-sub-ul">
                                            <NavSubSub dataLoc={sub} ogHovered={this.props.hovered} hoveredSub={this.state.isHoveredSub}/>
                                        </ul>
                                    </li>
                                )})}
                        </ul>

                    )
                }
                return renderSubCat
            })

        }

        return (
            <div className="nav-bar-outer">
                {renderSubCat}
            </div>
        )
    }
}
