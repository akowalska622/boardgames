import Card from '../../components/UI/Card';
import classes from './GameDetail.module.css';
import Image from 'next/image'


function GameDetail({ name, description, img }) {
  return (
    <div className={classes.wrapper}>
      <Card>
        <div className={classes.title}>
          <h1>{name}</h1>
        </div>
        <div className={classes.infoContainer}>
          <Image src={img} alt={name} />
          <p className={classes.description}>{description}</p>
        </div>
      </Card>
    </div>
  );
}

export default GameDetail;
