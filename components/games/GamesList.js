import classes from './GamesList.module.css';
import GameItem from './GameItem';

function GameList({ gamesList, onRent }) {
  return (
    <ul className={classes.list}>
      {gamesList.map(game => (
        <GameItem key={game.id} {...game} onRent={onRent} />
      ))}
    </ul>
  );
}

export default GameList;
