import { useRouter } from 'next/router';
import Card from '../UI/Card';
import classes from './GameItem.module.css';

function GameItem({ name, description, available, returnDate, fee, img, id }) {
  const buttonLabel = available ? 'Rent' : 'Waiting list';

  const router = useRouter();

  const showDetails = () => {
    router.push(`/${id}`);
  };

  return (
    <Card>
      <img className={classes.image} src={img} alt={name} />
      <div className={classes.gameInfo}>
        <h1>{name}</h1>
        <p>{description}</p>
        <small>
          {available ? 'Available!' : `Borrowed until ${returnDate}`}
        </small>
        <p>Rent fee: ${fee}</p>
        <button>{buttonLabel}</button>
        <button onClick={showDetails}>Game details</button>
      </div>
    </Card>
  );
}

export default GameItem;
