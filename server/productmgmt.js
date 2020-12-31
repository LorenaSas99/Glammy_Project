const express = require('express');

function createRouter(db) {
  const router = express.Router();

  // the routes are defined here
  router.post('/add', (req, res, next) => {
    var sql = "INSERT INTO cos (user_id, name, pret, descriere) VALUES ("+ req.body.user_id + ",'" + req.body.title +"'," + parseFloat(req.body.pret) + ",'" + req.body.descriere + "')";
    console.log(req.body.user_id, req.body.title, req.body.pret, req.body.descriere);
    console.log(sql);

    db.all(sql, [], (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).json('error');
        } else if (rows.length === 1) {
          console.log('Product already exists.');
          res.status(200).json('user_exists');
        } else {
          let attributes = [req.body.first_name, req.body.last_name, req.body.email, req.body.password];
          var sql = "INSERT INTO users (first_name,last_name,email,password) VALUES (?,?,?,?)";
    db.run(sql, [], (err) => {
        if (err) {
          console.log(err);
          res.status(500).json('error');
        } else {
          console.log('product added');
          res.status(200).json('ok');
        }
      });
  });

  router.get('/cos', (req, res, next) => {
    var sql = "SELECT * FROM users WHERE email='" + req.body.email + "' and password='" + req.body.password + "'";
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json('error');
      } else if (rows.length === 1) {
        console.log('User already exists. Cannot register');
        res.status(200).json('user_exists');
      } else {
        let attributes = [req.body.first_name, req.body.last_name, req.body.email, req.body.password];
        var sql = "INSERT INTO users (first_name,last_name,email,password) VALUES (?,?,?,?)";
        db.run(sql, attributes, (err) => {
          if (err) {
            console.log(err);
            res.status(500).json('error');
          } else {
            console.log('user registered');
            res.status(200).json('ok');
          }
        });
      }
    });
  });

  return router;
}

module.exports = createRouter;