import { useRouter } from 'next/router';
import AddGameForm from '../../components/games/AddGameForm';

function NewGame() {
  const router = useRouter();

  const addGameHandler = async enteredGameData => {
    const res = await fetch('/api/new-game-api', {
      method: 'POST',
      body: JSON.stringify(enteredGameData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);

    router.replace('/');
  };

  return <AddGameForm onAddGame={addGameHandler} />;
}

export default NewGame;
