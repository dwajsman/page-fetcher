const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localFile = process.argv[3];

request(url, (error, response, body) => {
 
  fs.writeFile(localFile, body, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
  
});
