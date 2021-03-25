import {useContext, useState} from 'react';
import cn from 'classnames'
import { useHistory } from 'react-router-dom';

import {FireBaseContext} from '../../../../context/firebaseContext'
import {PokemonContext} from '../../../../context/pokemonContext'
import PokemonCard from '../../../../components/PokemonCard'
import s from './style.module.css'

const FinishPage = () => {
  const {pokemons, setSelected, pokemonsEnemy, setPokemonsEnemy, winer} = useContext(PokemonContext);
  const [isSelected, setSelectedCard] = useState(null);
  const history = useHistory();
  const firebase = useContext(FireBaseContext);

  if (!pokemonsEnemy.length || !pokemons) {
    history.replace('/game')
  }

  const onClickEndGame = () => {
    if (winer === 1 && isSelected) {
      firebase.addPokemon(isSelected);
    }
    setPokemonsEnemy([]);
    history.replace('/game')
  }


  return (
    <div className={s.container}>
      <h1>This is Finish Page</h1>
      <div className={s.flex}>
        {
          Object.values(pokemons).map(item => (
            <div 
              className={cn(s.cardBoard)}
            >
              <PokemonCard 
                  className={s.card}
                  key={item.id}
                  type={item.type}
                  values={item.values}
                  img={item.img}
                  name={item.name}
                  id={item.id}
                  isActive={true}
                  minimize={false}
              />
            </div>
          ))
        }
      </div>
      <button onClick={onClickEndGame}>
        End Game!
      </button>
      <div className={s.flex}>
        {
          pokemonsEnemy.map(item => (
            <div 
              className={cn(s.cardBoard)}
              onClick={ () => setSelectedCard(item)}
            >
              <PokemonCard 
                  className={s.card}
                  key={item.id}
                  type={item.type}
                  values={item.values}
                  img={item.img}
                  name={item.name}
                  id={item.id}
                  isActive={true}
                  minimize={false}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default FinishPage;