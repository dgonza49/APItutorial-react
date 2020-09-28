var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //Mock Data
  let dataArray = [
    { name: "John", age: 12 },
    { name: "Lisa", age: 15 },
    { name: "Nils", age: 50 },

  ];

  //Convert the data to JSON
  res.json({
    data: dataArray
  });


});

module.exports = router;
