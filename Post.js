const axios = require("axios");

const getFindes = require("./getFindes");

const PORT = process.env.PORT || 8090;

module.exports = function postFestivos(year) {
  var data = JSON.stringify(getFindes(year));

  var config = {
    method: "post",
    url: `http://localhost:${PORT}/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  let response = axios(config)
    .then(function (response) {
      response = response.stauts;
    })
    .catch(function (error) {
      console.log(error);
    });


    return response
};
