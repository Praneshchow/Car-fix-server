const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware. 
app.use(cors());
app.use(express.json());    // for getting the data form web body. 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2pzzeio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const serviceCollection = client.db('CarFix').collection('services');     // database, collection.    
    const bookingCollection = client.db('CarFix').collection('booking');      // database, collection. 

    // services. 
    app.get('/services', async(req, res) => {
        const cursor = serviceCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.get('/services/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};

      const options = {
        projection: {title: 1, price: 1, service_id: 1, img: 1 },   // taking some data form mongodb. 
      };

      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    })

    // bookings.
    app.get('/bookings', async(req, res) => {
      // console.log("query email: ", req.query.email);
      let query = {};
      if (req.query?.email){
        query = {email: req.query.email};
      }
      const result = await bookingCollection.find().toArray();
      res.send(result);
    })
    
    // insert data. 
    app.post('/bookings', async (req, res) => {
      const booking = req.body;
      console.log(booking);
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });

    // update data. 
    app.patch('/bookings/:id', async(req, res) =>{
      const id = req.params.id;       // Extracting ID
      const filter = { _id: new ObjectId(id)};     // creates a filter to find the booking by unique ID
      
      const updateBooking = req.body;    // gets the new status data from the request body. 
      console.log(updateBooking);
      const updateDoc = {
        $set: {
          status: updateBooking.status
        },
      };
      const result = await bookingCollection.updateOne(filter, updateDoc);    // update in the database.
      res.send(result);       // sends the result of update to the client. 
    })

    // delete data. 
    app.delete('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('server is running');
})

app.listen(port, () => {
    console.log(`car fix server is running on port ${port}`);
})


