const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      process.exit();
    } else if (body.length <= 2) {
      callback("Couldn't find that breed!", null);
      process.exit();
    } else {
      if (body.length > 2) {
        const data = JSON.parse(body);
        console.log(data[0].description);
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };