var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 1,
      job: "This is the 1st federal or state job scrapped from an API."
    },
        {
      id: 2,
      job: "This is a federal or state job scrapped from an API."
    },
    {
      id: 3,
      job: "This is the last federal or state job scrapped from an API."
    }
  ])
});

module.exports = router;
