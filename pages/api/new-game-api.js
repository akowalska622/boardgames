import { MongoClient } from 'mongodb';

const handleAddGame = async (req, res) => {
  if (req.method === 'POST') {
    const data = { ...req.body, available: true, returnDate: null };

    const client = await MongoClient.connect(process.env.MONGO_DB);
    const db = client.db();

    const gamesCollection = db.collection('games');

    const result = await gamesCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Game inserted' });
  }
};

export default handleAddGame;
