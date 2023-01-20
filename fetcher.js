let args = process.argv.slice(2);

const fs = require('fs');

// http://example.edu/
// ./test.txt

const request = require('request');
request(args[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);

  fs.writeFile(args[1], body, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file was saved");
  });
  
});

