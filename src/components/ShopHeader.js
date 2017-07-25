class ShopHeader extends Component {
  constructor() {
    super();
    this.state = {
      shop: {}
    }
  }

  componentDidMount() {

    fetch('https://openapi.etsy.com/v2/shops/listing/175112598?api_key=nrfza0h31bu4g5biq6bq6g4c'), {
      method: 'GET',
      dataType: 'JSON',
      headers: {'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/json',
      'Accept': 'application/json'}
     }
    }.then(response => {
      console.log(response.results[0].shop.id){
    });
  }

  render() {
    return (
      <div className="ShopHeader">
        ShopHeader code needed.
      </div>
    );
  }
}
