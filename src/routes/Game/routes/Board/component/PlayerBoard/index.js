import {useState} from 'react'
import cn from 'classnames'
import PokemonCard from '../../../../../../components/PokemonCard'
import s from './style.module.css'

const PlayerBoard = ({ player, cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null);
  return (
    <>
      { 
        cards.map(item => (
          <div className={cn(s.cardBoard, {
            [s.selected]: isSelected === item.id
          })}
            onClick={() => {
              setSelected(item.id);
              onClickCard && onClickCard({
                player,
                ...item,
              });
            }
          }>
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
    </>
  );
};

export default PlayerBoard;