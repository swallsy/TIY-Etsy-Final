// Fetch.js

// This file should not be imported.  Use the different fetches in here to copy and paste into code in other components.


  // URI listings/:listingId endpoint
  function getListing(listingId) {
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
  function getListingImages(listingId) {
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
  function getUser(userId) {
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
  function getShopItemsByListingId(listingId) {
    // first fetch getListingShop endpoint
    let fetchURL = 'https://openapi.etsy.com/v2/shops/listing/' + listingId + '?api_key=nrfza0h31bu4g5biq6bq6g4c';

    // fetch it and get the json
    fetch(fetchURL).then(response => {
      console.log(response);

      // now fetch
    })
  }
