import { useRouter } from 'next/router';
import Card from '../UI/Card';
import classes from './GameItem.module.css';
import Image from 'next/image';

function GameItem({
  name,
  description,
  available,
  returnDate,
  fee,
  img,
  id,
  onRent,
}) {
  const buttonLabel = available ? 'Rent' : 'Waiting list';

  const descriptionRendered =
    description.length > 170 ? description.slice(0, 170) + '...' : description;

  const router = useRouter();

  const showDetails = () => {
    router.push(`/${id}`);
  };

  const handleRent = () => {
    if (available) {
      onRent(name);
    }

    if (!available) {
      //waiting list
    }
  };

  return (
    <Card>
      <div className={classes.title}>
        <h1>{name}</h1>
      </div>
      <div className={classes.image}>
        <Image
          width={2400}
          height={1598}
          layout='responsive'
          src={`/api/imageproxy?url=${encodeURIComponent(img)}`}
          alt={name}
        />
      </div>
      <div className={classes.gameInfo}>
        <p>{descriptionRendered}</p>
        <div className={classes.rentDetails}>
          <p className={classes.available}>
            {available ? 'Available!' : `Borrowed until ${returnDate}`}
          </p>
          <p className={classes.fee}>
            Rent fee: <strong>${fee}</strong>
          </p>
        </div>
        <div className={classes.actions}>
          <button
            onClick={handleRent}
            className={`${classes.buttonRent} ${classes.button}`}
          >
            {buttonLabel}
          </button>
          <button
            className={`${classes.buttonDetails} ${classes.button}`}
            onClick={showDetails}
          >
            Game details
          </button>
        </div>
      </div>
    </Card>
  );
}

export default GameItem;
