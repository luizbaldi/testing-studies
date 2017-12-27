const request = require('request');

function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  request(url, (error, response, body) => {
    let apiResponse;

    try {
      apiResponse = JSON.parse(body);
    } catch (err) {
      console.log('Something went wrong. Try in a few minutes');
      return err;
    }

    console.log(`${amount} BTC to ${currency} = ${apiResponse.price}`);
  });
}

module.exports = convertBTC;
