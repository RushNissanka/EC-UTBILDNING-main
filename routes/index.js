var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose(); // Import sqlite3

const db = new sqlite3.Database('./db/products.db');  // Connect to products database

/* GET home page. */
router.get('/', function(req, res, next) {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) {
      return res.status(500).send("Failed to retrieve products");
    }
    res.render('index', { title: 'Freaky Fashion', products: rows });  // Pass products to EJS
  });
});

module.exports = router;
