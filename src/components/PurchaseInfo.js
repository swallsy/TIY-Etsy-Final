import React, { Component } from "react";
import "../styles/PurchaseInfo.css";

class PurchaseInfo extends Component {
  constructor() {
    super();
    this.state = {
      results: {},
      title: "",
      price: "",
      // quantity: 6,
      materials: [],
      Inventory: [],
      Products: [],
      options: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://openapi.etsy.com/v2/listings/" +
        this.props.listingId +
        "?includes=Inventory,ShippingInfo&api_key=nrfza0h31bu4g5biq6bq6g4c"
    )
      .then(response => response.json())
      .then(response => {
        let products = response.results[0].Inventory[0].products;

        let mapInventory = products.map(product => {
          return (
            <option
              value={product.offerings[0].price.currency_formatted_short}
              key={product.product_id}
            >
              {product.property_values[0].values}
              - {product.offerings[0].price.currency_formatted_short}
            </option>
          );
        });
        let mapMaterials = response.results[0].materials.map(material => {
          return (
            <div key={response.results.materials}>
              <li>
                {material}
              </li>
            </div>
          );
        });

        this.setState({
          results: response.results,
          title: response.results[0].title,
          price: response.results[0].price,
          materials: response.results[0].materials,
          Inventory: response.results[0].Inventory,
          products: response.results[0].Inventory[0].products,
          propertyValues:
            response.results[0].Inventory[0].products[0].property_values,
          propertyName:
            response.results[0].Inventory[0].products[0].property_values[0]
              .property_name,
          mapInventory: mapInventory,
          mapMaterials: mapMaterials
        });
      });
  }

  handleSubmit(e) {
    console.log(e);
    console.log("handleSubmit!");
  }

  handleChange(e) {
    console.log(e);
    console.log("handleChange!");
    console.log(this.value);
    this.setState({ price: e.target.value });
  }

  render() {
    if (this.state.propertyName) {
      this.setState({
        options: (
          <div>
            <label>
              {this.state.propertyName}
            </label>
            <br />
            <select onChange={this.handleChange}>
              <option>Select an option</option>
              {this.state.mapInventory}
            </select>
            <div>Please select an option</div>
            <br />
            <br />
          </div>
        )
      });
    }
    console.log(this.state);
    return (
			<div>
	      <div>
	        <h1>
	          {this.state.title}
	        </h1>
	        <button id="BUTTON_6" href="https://www.google.com">
	          Ask a question
	        </button>
	        <div>
	          ${this.state.price}
	        </div>
	      </div>
	        <br />
	        <br />
	      <div>
	        {this.state.options}
	      </div>
	      <div>
	      	<label htmlFor="inventory-select-quantity" id="LABEL_26">
	      		Quantity
	        </label>
	        <span>
	        	<select>
	            <option value="1">1</option>
	            <option value="2">2</option>
	            <option value="3">3</option>
	            <option value="4">4</option>
	            <option value="5">5</option>
	          </select>
	        </span>
	      	<div>
						Please select a quantity
					</div>
	      </div>
	      <div>
	        <form method="get" action="https://www.etsy.com/cart">
            <button type="submit">Add to cart</button>
          </form>
        </div>
        <div>
					Etsy Purchase Guarantee
				</div>
        <div>
					Get what you ordered or your money back.
				</div>
        <div>
					Learn more
				</div>
        <div>
					Overview
				</div>
        <div>
	      	Handmade item Materials:
	        <ul>
	        	<li>
              {this.state.mapMaterials}
            </li>
          </ul>
				</div>
			</div>
    );
  }
}

export default PurchaseInfo;
