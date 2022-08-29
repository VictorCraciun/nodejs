const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://victor:<Teodora13>@cluster0.ungxvbj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  if (err) throw err;
  console.log("Conection OK!")
  client.close();
});