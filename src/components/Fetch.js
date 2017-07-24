// Fetch.js

// This file should be imported to access all of the necessary fetches using methods, to make the rest of the code less redundant and improve readability.

export default class Fetch {
  // URI listings/:listingId endpoint
  getListing(listingId) {
    // make the fetch URL
    let fetchURL =
      'https://openapi.etsy.com/v2/listings/' +
      listingId +
      '?api_key=nrfza0h31bu4g5biq6bq6g4c';

    // fetch it and return the json
    fetch(fetchURL)
      .then(response => {
        console.log(response);

        return response;
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  // URI listings/:listingId/images endpoint
  getListingImages(listingId) {
    // make the fetch URL
    let fetchURL =
      'https://openapi.etsy.com/v2/listings/' +
      listingId +
      '/images?api_key=nrfza0h31bu4g5biq6bq6g4c';

    // fetch it and return the json
    fetch(fetchURL)
      .then(response => {
        console.log(response);

        return response;
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  // URI /users/:userId endpoint
  getUser(userId) {
    // make the fetch URL
    let fetchURL =
      'https://openapi.etsy.com/v2/users/' +
      userId +
      '?api_key=nrfza0h31bu4g5biq6bq6g4c';

    // fetch it and return the json
    fetch(fetchURL)
      .then(response => {
        console.log(response);

        return response;
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  // get items that are in the sellers shop
  getShopItemsByListingId(listingId) {
    // first fetch getListingShop endpoint
    let fetchURL = 'https://openapi.etsy.com/v2/shops/listing/' + listingId + '?api_key=nrfza0h31bu4g5biq6bq6g4c';

    // fetch it and get the json
    fetch(fetchURL).then(response => {
      console.log(response);

      // now fetch 
    })
  }

}
