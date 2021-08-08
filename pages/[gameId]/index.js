import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import GameDetail from '../../components/games/GameDetail';

const DetailPage = props => {
  return (
    <>
      <Head>
        <title>{props.gameData.name}</title>
        <meta name='description' content={props.gameData.description} />
      </Head>
      <GameDetail {...props.gameData} />
    </>
  );
};

export default DetailPage;

export const getStaticProps = async context => {
  const gameId = context.params.gameId;

  const client = await MongoClient.connect(process.env.MONGO_DB);
  const db = client.db();

  const gamesCollection = db.collection('games');

  const selectedGame = await gamesCollection.findOne({
    _id: ObjectId(gameId),
  });

  client.close();

  return {
    props: {
      gameData: {
        id: selectedGame._id.toString(),
        name: selectedGame.name,
        fee: selectedGame.fee,
        img: selectedGame.image,
        description: selectedGame.description,
        available: selectedGame.available,
        returnDate: selectedGame.returnDate,
      },
    },
  };
};

/*
 */

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://aniakowalska:uQvkmXrLx9KUwpqs@cluster0.mhmmk.mongodb.net/board-games?retryWrites=true&w=majority'
  );
  const db = client.db();

  const gamesCollection = db.collection('games');

  const gamesPaths = await gamesCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: gamesPaths.map(game => {
      return {
        params: {
          gameId: game._id.toString(),
        },
      };
    }),
  };
}
