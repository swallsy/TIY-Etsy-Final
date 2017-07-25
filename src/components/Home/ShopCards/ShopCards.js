import React, { Component } from 'react';
import Cards from './Cards.js';

export default class ShopCards extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories: null,
            randomCategories: null
        }

    }

    randomizer() {
        let categories = this.state.categories;
        let tmp = categories.slice(categories);
        let randomArray = [];
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * tmp.length);
            let removed = tmp.splice(index, 1);
            randomArray.push(removed[0]);
        }
        this.setState({randomCategories: randomArray})
    }

    componentDidMount() {
        let defaultOptions = {
                url:'',
                method:'GET',
                mode: 'cors',
                headers:{
                    'Access-Control-Allow-Origin':'*'
                    },
                body:null,
                };

        let url = "https://openapi.etsy.com/v2/taxonomy/categories?api_key=085nft0q2j9pq6jojzkjqiso"
        fetch(url, defaultOptions).then((response) => {
            return response.json()
        }).then((data) => {
            let categories = data.results;
            this.setState({categories: categories})
        });
    }

    render() {
        return (
            <div>
                <Cards type={this.props.type} categories={this.state.randomCategories}/>
            </div>
        )
    }
}
