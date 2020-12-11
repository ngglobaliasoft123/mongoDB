var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true } , function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
//   var myobj = { username: "globalia ", address: "globaliasoft" , phone:"98974435720" , email:'test@gmail.com' };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });

    /** serach data */
    // dbo.collection("customers").findOne({}, function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    //   });


    /** base query*/
    // var query = { "phone" : "7874435720", "address" : "Highway 37" };
    // dbo.collection("customers").find(query).toArray(function(err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   db.close();
    // });
    

    // var mysort = { "phone" : 3 };
    // dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   db.close();
    // });


    // var myquery = { address: 'Highway 123' };
    // dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //   if (err) throw err;
    //   console.log("1 document deleted");
    //   db.close();
    // });


        // dbo.collection("customers123").drop(function(err, delOK) {
        //   if (err) throw err;
        //   if (delOK) console.log("Collection deleted");
        //   db.close();
        // });

        var myquery = { address: "Highway 37" };
        var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
        dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          db.close();
        });

});