const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ssb520:yWPQuwKQ34ILmZCX@cluster0.vtkz9ds.mongodb.net/mern-quiz?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connecton = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
};
module.exports = connecton;
