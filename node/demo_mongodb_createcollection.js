var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.createCollection("customers123", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});