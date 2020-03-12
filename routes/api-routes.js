var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/donors", function(req, res) {});

  app.post("/api/donor", function(req, res) {
    console.log("REQ BODY COMIN");
    console.log(req.ownerName);
    db.Donor.create({
      name: req.body.ownerName,
      business: req.body.businessName,
      address: req.body.businessAddress,
      summary: req.body.summary
    }).catch(function(err) {
      res.status(401).json(err);
    });
  });

  app.get("/api/donees", function(req, res) {});

  app.post("/api/donee", function(req, res) {
    db.Donor.create({
      name: req.body.ownerName,
      business: req.body.charityName,
      address: req.body.charityAddress
    }).catch(function(err) {
      res.status(401).json(err);
    });
  });
};
