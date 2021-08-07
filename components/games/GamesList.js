import classes from './GamesList.module.css';
import GameItem from './GameItem';

function GameList({ gamesList }) {
  return (
    <ul className={classes.list}>
      {gamesList.map(game => (
        <GameItem key={game.id} {...game} />
      ))}
    </ul>
  );
}

export default GameList;
