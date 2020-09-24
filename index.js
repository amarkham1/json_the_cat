const { fetchBreedDescription } = require('./breedFetcher');

if (!process.argv[2]) {
  console.log("Please input a breed as an argument!");
  process.exit();
}

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});