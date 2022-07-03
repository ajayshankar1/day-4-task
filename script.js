//task 1
var _ = require("lodash");

var a = {
  age: "24",
  name: "ajay",
};

var b = {
  name: "ajay",
  age: "24",
};

console.log(_.isEqual(a, b));

//task 2 and 3

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);

  console.log(data);

  for (var i in data) {
    console.log(data[i].flags);
  }
  for (var i in data) {
    console.log(
      data[i].name,
      data[i].region,
      data[i].subregion,
      data[i].population
    );
  }
};
