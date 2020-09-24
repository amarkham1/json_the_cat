const request = require('request');

const breedFetcher = breed => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    if (error) {
      console.log(error);
      process.exit();
    }
    if (body.length <= 2) {
      console.log("Couldn't find that breed!");
      process.exit();
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
  });
};

if (!process.argv[2]) {
  console.log("Please input a breed as an argument!");
  process.exit();
}
breedFetcher(process.argv[2]);