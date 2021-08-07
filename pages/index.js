import GameList from '../components/games/GamesList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

function HomePage(props) {
  const handleRent = name => {
    console.log(name, 'rent');
  };

  return (
    <>
      <Head>
        <title>Board games share</title>
        <meta
          name='description'
          content='Browse and share board games in your location'
        />
      </Head>
      <GameList gamesList={props.gamesList} onRent={handleRent} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_DB);
  const db = client.db();

  const gamesCollection = db.collection('games');

  const fetchedGames = await gamesCollection.find().toArray();

  client.close();

  return {
    props: {
      gamesList: fetchedGames.map(game => ({
        description: game.description,
        available: game.available,
        returnDate: game.returnDate,
        name: game.name,
        fee: game.fee,
        img: game.image,
        id: game._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
