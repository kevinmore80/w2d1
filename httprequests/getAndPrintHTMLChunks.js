// while https is built-in to Node, it is a module, so it must be required
const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(res) {
    res.setEncoding('utf8');
    let rawData = '';

  res.on('data', function(chunk) {
    rawData += chunk;
  });

  res.on('end', function () {
    console.log(rawData);

  });
});
}

getAndPrintHTMLChunks();