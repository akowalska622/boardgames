import { useState } from 'react';
import classes from './GamesList.module.css';
import GameItem from './GameItem';

function GameList({ gamesList, onRent }) {
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const filteredGameList = showOnlyAvailable
    ? gamesList.filter(game => game.available)
    : gamesList;

  const handleToggleShow = () => {
    setShowOnlyAvailable(prevState => !prevState);
  };

  return (
    <>
      <div className={classes.toggleShow}>
        <input
          type='checkbox'
          onChange={handleToggleShow}
          checked={showOnlyAvailable}
          name='toggleShow'
          id='toggleShow'
        />
        <label htmlFor='toggleShow'>Show only available</label>
      </div>

      <ul className={classes.list}>
        {filteredGameList.map(game => (
          <GameItem key={game.id} {...game} onRent={onRent} />
        ))}
      </ul>
    </>
  );
}

export default GameList;
