import GameList from '../components/games/GamesList';

const DUMMY_GAMES = [
  {
    id: 1,
    name: 'Dixit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    available: true,
    returnDate: null,
    fee: 15,
    img: 'https://image.ceneostatic.pl/data/products/10813131/i-dixit.jpg',
  },
  {
    id: 2,
    name: 'Codenames',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    available: false,
    returnDate: '2021-09-10',
    fee: 10,
    img: 'https://image.ceneostatic.pl/data/products/48837845/i-codenames-tajniacy-edycja-angielska.jpg',
  },
];

function HomePage({ gamesList }) {
  return (
    <>
      <GameList gamesList={gamesList} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      gamesList: DUMMY_GAMES,
    },
    revalidate: 30,
  };
}

export default HomePage;
