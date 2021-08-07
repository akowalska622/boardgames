import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://aniakowalska:uQvkmXrLx9KUwpqs@cluster0.mhmmk.mongodb.net/board-games?retryWrites=true&w=majority'
    );
    const db = client.db();

    const gamesCollection = db.collection('games');

    const result = await gamesCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Game inserted' });
  }
};

export default handler;
