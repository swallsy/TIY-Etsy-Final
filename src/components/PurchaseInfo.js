import React, {Component} from "react";
import "../styles/PurchaseInfo.css";

class PurchaseInfo extends Component {
	constructor() {
		super();
		this.state = {
			results: {},
			title: '',
			price: '',
			// quantity: 6,
			materials: [],
			Inventory: [],
			Products: []
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		fetch('https://openapi.etsy.com/v2/listings/' + this.props.listingId + '?includes=Inventory,ShippingInfo&api_key=nrfza0h31bu4g5biq6bq6g4c').then(response => response.json()).then(response => {

			let products = response.results[0].Inventory[0].products;

			let mapInventory = products.map(product => {
				return (
					<option value={product.offerings[0].price.currency_formatted_short} key={product.product_id}>{product.property_values[0].values}
						- {product.offerings[0].price.currency_formatted_short}</option>
				)
			});
			let mapMaterials = response.results[0].materials.map(material => {
				return (
					<div key={response.results.materials}>
						<li>
							{material}
						</li>
					</div>
				)
			});

			this.setState({
				results: response.results,
				title: response.results[0].title,
				price: response.results[0].price,
				materials: response.results[0].materials,
				Inventory: response.results[0].Inventory,
				products: response.results[0].Inventory[0].products,
				propertyValues: response.results[0].Inventory[0].products[0].property_values,
				propertyName: response.results[0].Inventory[0].products[0].property_values[0].property_name,
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
		this.setState({price: e.target.value});
	}

	render() {
		console.log(this.state);
		return (
			<div>
			<div>
			<div>
				<h1>
					{this.state.title}
				</h1>
			</div>
			<div>
				<button id="BUTTON_6" href='https://www.etsy.com/signin'>
					Ask a question
				</button>
			</div>
			<div>
				<span>{this.state.price}</span>
				<meta content={this.state.currency_code}/>
				<meta content={this.state.price}/>
				<meta content="in_stock" id="META_12"/>
			</div>
			<div>
				<label>
					{this.state.propertyName}
				</label>
				<span>
					<select onChange={this.handleChange}>
						<option>
							Select an option
						</option>
						{this.state.mapInventory}
					</select>
				</span>
				<div>
					Please select an option
				</div>
			</div>
			<div>
				<label htmlFor="inventory-select-quantity" id="LABEL_26">
					Quantity
				</label>
				<span>
					<select>
						<option value="1">
							1
						</option>
						<option value="2">
							2
						</option>
						<option value="3">
							3
						</option>
						<option value="4">
							4
						</option>
						<option value="5">
							5
						</option>
					</select>
				</span>
				<div>
					Please select a quantity
				</div>
			</div>
		</div> < div > <form action="/cart/listing.php" method="post">
			<input type="hidden" name="listing_id" value="175112598" id="INPUT_40"/>
			<input type="hidden" name="listing_inventory_id" id="INPUT_41"/>
			<input type="hidden" name="shipping_method_id" id="INPUT_42"/>
			<input type="hidden" name="quantity" value="1" id="INPUT_43"/>
			<input type="hidden" name="_nnc" value="3:1501182500:bD7KFiev-KRLTkb7LA_xVIZWyOeC:e390fe96872940260375ff989a6cfa6cedf8703715c13d2eb84c757b0f5ed454" id="INPUT_44"/>
			<button type="submit">
				Add to cart
			</button>
		</form> < /div>
				<div id="DIV_51">

							<h2 id="H2_66">
								Etsy Purchase Guarantee
							</h2 > <p id="P_67">
			Get what you ordered or your money back.
			<br id="BR_68"/>
			<a href="/etsyguarantee" id="A_69">Learn more</a>
		</p> < /div>
				<hr id="HR_70"/ > <div id="DIV_73">
			<h3 id="H3_74">
				Overview
			</h3>
			<ul id="UL_75">
				<li id="LI_76">
					Handmade item
				</li>
				<li id="LI_77">
					Materials:
					<ul>
						<li>
							{this.state.mapMaterials}
						</li>
					</ul>
				</li>
				<li id="LI_79">
					Only ships within
					<span id="SPAN_80">United States</span>.
				</li>
				<li id="LI_81">
					Feedback:
					<a href="#reviews" id="A_82">26 reviews</a>
				</li>
				<li id="LI_83">
					Favorited by:
					<a href="/listing/175112598/cat-battle-armor/favoriters?ref=l2-collection-count" id="A_84">6036 people</a>
				</li>
			</ul>
			<ul id="UL_85">
				<li id="LI_86">
					<label id="LABEL_93">
						This shop accepts Etsy gift cards
					</label>
				</li>
			</ul>

			<div id="DIV_94">
				<button type="button" id="BUTTON_97">
					<span id="SPAN_98"></span>
					<span id="SPAN_99">Favorite</span>
					<span id="SPAN_100">Favorited</span>
				</button>
				<button type="button" id="BUTTON_102">
					<span id="SPAN_104">Add to</span>
					<span id="SPAN_105">Added</span>
				</button>
			</div>
		</div>
	</div>
		);
	};
}

export default PurchaseInfo;
