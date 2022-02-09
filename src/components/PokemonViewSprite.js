import pokeServices from '../api/pokeServices';
import Types from './Types';

import './PokemonViewSprite.css'

export default function PokemonViewSprite(props) {

  return (

    <div className='sprite-frame'>
        <div className='sprite-frame__sprite-container'>
          <div className='sprite-frame__sprite-container__id'>n°{props.pokeData.id}</div>
          <img src={props.pokeData.sprites} alt={`${props.pokeData.name} sprite`}></img>
        </div>
        <div className='sprite-frame__types-container'>
          <div className='sprite-frame__types-container__name'>
            {pokeServices.upperFirstLetter(props.pokeData.name)}&emsp;
            <span className='sprite-frame__types-container__id'>n°{props.pokeData.id}</span>
          </div>
          <Types types={props.pokeData.types} />
        </div>
    </div>

  );
}