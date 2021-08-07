import Card from '../../components/UI/Card';
import classes from './GameDetail.module.css';
import Image from 'next/image';

function GameDetail({ name, description, img }) {
  return (
    <div className={classes.wrapper}>
      <Card>
        <div className={classes.title}>
          <h1>{name}</h1>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.img}>
            <Image
              width={2400}
              height={1598}
              layout='responsive'
              src={`/api/imageproxy?url=${encodeURIComponent(img)}`}
              alt={name}
            />
          </div>
          <p className={classes.description}>{description}</p>
        </div>
      </Card>
    </div>
  );
}

export default GameDetail;
