import GameDetail from '../../components/games/GameDetail';

const DetailPage = props => {
  return <GameDetail {...props.gameData} />;
};

export default DetailPage;

export const getStaticProps = async context => {
  const gameId = context.params.gameId;

  console.log(gameId);

  return {
    props: {
      gameData: {
        id: gameId,
        name: 'Dixit',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        available: true,
        returnDate: null,
        fee: 15,
        img: 'https://image.ceneostatic.pl/data/products/10813131/i-dixit.jpg',
      },
    },
  };
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          gameId: '1',
        },
      },
      {
        params: {
          gameId: '2',
        },
      },
    ],
  };
}
