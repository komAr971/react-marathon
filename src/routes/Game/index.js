import { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import database from '../../service/firebase.js';

import s from './style.module.css';
import PokemonCard from '../../components/PokemonCard';

const GamePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('home');
  };

  const [cards, setCards] = useState({})

  const handleClickAddNewPokemon = () => {
    const newPokemon = {
      "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
      ],
      "base_experience": 122,
      "height": 11,
      "weight": 300,
      "id": Math.floor(Math.random() * 100 + 1),
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      "name": "pidgeotto-copy",
      "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
      },
      "type": "normal",
      "values": {
        "top": 7,
        "right": 5,
        "bottom": 1,
        "left": 2
      }
    };
    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(newPokemon);
  }

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setCards(snapshot.val());
    })
  }, [cards])

  const onHandleCardClick = (id) => {
    setCards(cards => {
      return Object.entries(cards).reduce((acc, item) => {
          const pokemon = {...item[1]};
          if (pokemon.id === id) {
              pokemon.active = !pokemon.active;
              database.ref('pokemons/'+ item[0]).set({
                ...pokemon
              });
          };
  
          acc[item[0]] = pokemon;
  
          return acc;
      }, {});
  });
  };

  return (
    <div className={ cn(s.container) }>
      <button onClick={handleClickAddNewPokemon}>
        Add new Pokemon
      </button>
      <div className={ cn(s.flex) }>
        {
          Object.entries(cards).map(([key, item]) => <PokemonCard 
            key={key}
            cardKey={key}
            type={item.type}
            values={item.values}
            img={item.img}
            name={item.name}
            id={item.id}
            isActive={item?.active}
            onHandleCardClick={onHandleCardClick}
            />)
        }
      </div>
      <button onClick={handleClick}>
        Back Home
      </button>
    </div>
  );
};

export default GamePage;