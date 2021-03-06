import { useRef } from 'react';

import FormWrapper from '../UI/FormWrapper';
import classes from './AddGameForm.module.css';

function AddGameForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const feeInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredFee = feeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const gameData = {
      name: enteredName,
      image: enteredImage,
      fee: enteredFee,
      description: enteredDescription,
      available: true,
      returnDate: null,
    };

    props.onAddGame(gameData);
  }

  return (
    <FormWrapper>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Game name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Game Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='fee'>Fee</label>
          <input type='number' required id='fee' ref={feeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Game</button>
        </div>
      </form>
    </FormWrapper>
  );
}

export default AddGameForm;
