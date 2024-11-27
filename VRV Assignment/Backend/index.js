const express = require('express');
const app = express();
const port = 9000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // To parse incoming JSON requests

const uri = "mongodb+srv://sankebhavana1:Sonusanke8@cluster0.wojhsvl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

async function run() {
  try {
    await client.connect();
    const db = client.db("UsersDB");
    const cartCollection = db.collection("carts");

    // Get cart by user ID
    app.get('/cart/:uid', async (req, res) => {
      try {
        const uid = req.params.uid;
        const cart = await cartCollection.findOne({ userId: uid });
        if (cart) {
          res.json({ cartItems: cart.items });
        } else {
          res.json({ cartItems: [] });
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: 'Error fetching cart. Please try again later.' });
      }
    });

    // Update or create a cart for a user
    app.patch('/cart/:uid', async (req, res) => {
      try {
        const uid = req.params.uid;
        const { items } = req.body;

        // Basic validation for items array
        if (!Array.isArray(items)) {
          return res.status(400).json({ message: 'Invalid data format for items' });
        }

        const existingCart = await cartCollection.findOne({ userId: uid });

        if (existingCart) {
          // Update the existing cart
          await cartCollection.updateOne(
            { userId: uid },
            { $set: { items: items } }
          );
        } else {
          // Create a new cart
          await cartCollection.insertOne({ userId: uid, items: items });
        }

        res.send({ message: 'Cart updated successfully' });
      } catch (error) {
        console.error('Error updating cart:', error);
        res.status(500).json({ message: 'Error updating cart. Please try again later.' });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

run().catch(console.dir);
