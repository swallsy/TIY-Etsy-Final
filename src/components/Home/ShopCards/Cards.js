import React, { Component } from 'react';

export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.randomizer = this.randomizer.bind(this)

        this.state = {
            response: null,
            randomCategories: null,
            render: null,
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
            console.log(randomArray[0].category_id)
            console.log(randomArray[0].category_name);
            console.log(randomArray.map((category) => category.category_id));

            let render = randomArray.map((category) => {
                return(
                    <div key={category.category_id} className="col-2">
                        <h4>image placeholder</h4>
                        <p>{category.category_name}</p>
                    </div>
                )
            })
            console.log(render);

            renderMe = (
                <div className="row">{render}</div>
            )
        }
        else if(this.props.type === "gifts"){
            renderMe = (
                <h1>Gifts!</h1>
            )
        }
        this.setState({renderMe: renderMe})
    }

    componentWillMount() {
        var resp;
        console.log("ShopCards will mount");
        let url = "https://openapi.etsy.com/v2/taxonomy/categories?api_key=085nft0q2j9pq6jojzkjqiso";
        fetch(url)
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
