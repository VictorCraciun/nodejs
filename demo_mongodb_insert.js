const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://victor:<Teodora13>@cluster0.ungxvbj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  var myobj = { name: "Company Inc", address: "Highway 37" };
  const collection = client.db("test").collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close()
  });
  // perform actions on the collection object
  ;
});