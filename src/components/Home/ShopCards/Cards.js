import React, { Component } from 'react';

export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.randomizer = this.randomizer.bind(this)

        this.state = {
            response: null,
            renderMe: null
        }
    }

    randomizer(response) {
        let renderMe;
        if(this.props.type === "category"){
            let tmp = response.slice(response);
            let randomArray = [];
            for (let i = 0; i < 6; i++) {
                let index = Math.floor(Math.random() * tmp.length);
                let removed = tmp.splice(index, 1);
                randomArray.push(removed[0]);
                }
            let increment = 1
            let render = randomArray.map((category) => {
                return(
                    <div key={category.category_id} className="col-2">
                        <div className="card-box">
                            <div id={"card-image" + (increment++)} className="s-card-image"></div>
                            <p className="s-card-cat-name">{category.long_name}</p>
                        </div>
                    </div>
                )
            })

            renderMe = (
                <div className="row s-card-center-box">{render}</div>
            )
        }
        else if(this.props.type === "gifts"){
            renderMe = (
                <div className="row s-card-center-box">
                    <div className="col-2">
                        <div className="card-box">
                            <div id="sc-gc-1" className="s-card-image"></div>
                            <p className="s-card-cat-name">Best of summer: under $30</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card-box">
                            <div id="sc-gc-2" className="s-card-image"></div>
                            <p className="s-card-cat-name">Zodiac gifts</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card-box">
                            <div id="sc-gc-3" className="s-card-image"></div>
                            <p className="s-card-cat-name">Crowd favorites</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card-box">
                            <div id="sc-gc-4" className="s-card-image"></div>
                            <p className="s-card-cat-name">A natural beauty</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card-box">
                            <div id="sc-gc-5" className="s-card-image"></div>
                            <p className="s-card-cat-name">Personalized gifts</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card-box">
                            <div id="sc-gc-6" className="s-card-image"></div>
                            <p className="s-card-cat-name">Wedding party gifts</p>
                        </div>
                    </div>
                </div>
            )
        }
        this.setState({renderMe: renderMe})
    }


    componentWillMount() {
        let urlCategories = "https://openapi.etsy.com/v2/taxonomy/categories?api_key=085nft0q2j9pq6jojzkjqiso";
        fetch(urlCategories)
            .then (response => response.json())
            .then (response => {
                this.randomizer(response.results)
            })
    }

    render() {
        return (
            <div>
                {this.state.renderMe}
            </div>
        )
    }
}
