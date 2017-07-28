import React , {Component} from 'react'
import navBarData from './NavBarData.js'
import NavSubSub from './NavSubSub.js'

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.handleHoverSub = this.handleHoverSub.bind(this)
        this.conditionalChevron = this.conditionalChevron.bind(this)

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

    conditionalChevron(prop) {

        let chevron;
        if(prop !== "Kids & Baby") {
            chevron = <i className="fa fa-chevron-right" />
        }
        return chevron
    }


    render() {
        let renderSubCat;
        if(this.props.hovered) {
            renderSubCat = navBarData.map(cat => {
                if(cat.category === this.props.hovered) {
                    return (
                    <ul className="dropdown-ul">
                        <div className="nav-bar-outer">
                            <ul key={cat.category} className="sub-ul">
                                {cat.sub_categories.map(sub => {
                                    return (
                                        <li key={sub.name} className="sub-cat" >
                                             <a href={sub.link}><span className={sub.name} onMouseEnter={this.handleHoverSub}>
                                                {sub.name}
                                            </span></a>

                                            {this.conditionalChevron(this.props.hovered)}

                                            <ul className="sub-sub-ul">
                                                <NavSubSub dataLoc={sub} ogHovered={this.props.hovered} hoveredSub={this.state.isHoveredSub}/>
                                            </ul>
                                        </li>
                                    )})}
                            </ul>
                        </div>
                    </ul>
                    )
                }
                return renderSubCat
            })

        }

        return (
                <div>
                    {renderSubCat}
                </div>

        )
    }
}
