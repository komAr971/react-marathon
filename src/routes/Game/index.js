import { useRouteMatch, Route,  Switch } from 'react-router'
import {useState} from 'react'

import {PokemonContext} from '../../context/pokemonContext';
import StartPage from './routes/Start'
import BoardPage from './routes/Board'
import FinishPage from './routes/Finish'

const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [pokemonsEnemy, setPokemonsEnemy] = useState([])
  const [winer, setWiner] = useState(null);
  const match = useRouteMatch();

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons(prevState => {
      if (prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];

        return copyState;
      }
      return {
        ...prevState,
        [key]: pokemon,
      }
    })
  }

  const setEnemy = (pokemons) => {
    setPokemonsEnemy(prevState => {
      return [...prevState, ...pokemons];
    });
  }

  const onSetWiner = (winer) => {
    setWiner(winer);
  }

  return (
      <PokemonContext.Provider value={{ 
        pokemons: selectedPokemons,
        onSelectedPokemons: handleSelectedPokemons,
        pokemonsEnemy: pokemonsEnemy,
        setPokemonsEnemy: setEnemy,
        winer: winer,
        setWiner: onSetWiner
      }}>
        <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
      </PokemonContext.Provider>
      
  );
};

export default GamePage;