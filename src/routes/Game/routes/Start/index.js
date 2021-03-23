import { useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import s from './style.module.css';
import PokemonCard from '../../../../components/PokemonCard';
import {FireBaseContext} from '../../../../context/firebaseContext';
import {PokemonContext} from '../../../../context/pokemonContext'

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext)
  const history = useHistory();
  const [cards, setCards] = useState({});


  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setCards(pokemons);
    })
  }, []);

  const HandleChangeSelected = (key) => {
    const pokemon = {...cards[key]};
    pokemonContext.onSelectedPokemons(key, pokemon);

    setCards(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }))
  };

  const handleClick = () => {
    history.push('home');
  };

  const handleStartGameClick = () => {
    history.push('game/board');
  }

  return (
    <div className={ cn(s.container) }>
      <button 
        onClick={handleStartGameClick}
        disabled={Object.keys(pokemonContext.pokemons).length < 5}
      >
        Start Game
      </button>
      <div className={ cn(s.flex) }>
        {
          Object.entries(cards).map(([key, item]) => 
            <PokemonCard 
            className={cn(s.card)}
            key={key}
            cardKey={key}
            type={item.type}
            values={item.values}
            img={item.img}
            name={item.name}
            id={item.id}
            isSelected={item.selected}
            isActive={true}
            onHandleCardClick={() => {
              if (Object.keys(pokemonContext.pokemons).length < 5 || item.selected) {
                HandleChangeSelected(key);
              }
            }}
            minimize={false}
            />)
        }
      </div>
      <button onClick={handleClick}>
        Back Home
      </button>
    </div>
  );
};

export default StartPage;