import { useEffect, useState } from 'react';
import pokeServices from '../api/pokeServices';

import './PokemonViewStats.css'

export default function PokemonViewStats(props) {

  const [desc, setDesc] = useState([]);
  const gaugeCalculator = (value) => {
    return (value*100)/210
  }

  useEffect(() => {
    pokeServices.fetchDescription(props.pokeData.id).then((data) => {setDesc(data)})
    console.log(props.pokeData.abilities)
  },[])

  return (

    <div className='stats-frame'>

      <div className='stats-frame__battle-stats'>

        <h2>BASE STATS</h2>
        <div className='gauges-container'>

          <div>
            <div>HP</div><div className='stats-gauge'>
              <div style={{width: `${gaugeCalculator(props.pokeData.stats[0].base_stat)}%`}}><div className='stats-gauge-value'>{props.pokeData.stats[0].base_stat}</div></div></div>
            <div>ATTACK</div><div className='stats-gauge'>
              <div style={{width: `${gaugeCalculator(props.pokeData.stats[1].base_stat)}%`}}><div className='stats-gauge-value'>{props.pokeData.stats[1].base_stat}</div></div></div>
            <div>DEFENSE</div><div className='stats-gauge'>
              <div style={{width: `${gaugeCalculator(props.pokeData.stats[2].base_stat)}%`}}><div className='stats-gauge-value'>{props.pokeData.stats[2].base_stat}</div></div></div>
          </div>

          <div>
            <div>ATK SPE</div><div className='stats-gauge'>
              <div style={{width: `${gaugeCalculator(props.pokeData.stats[3].base_stat)}%`}}><div className='stats-gauge-value'>{props.pokeData.stats[3].base_stat}</div></div></div>
            <div>DEF SPE</div><div className='stats-gauge'>
              <div style={{width: `${gaugeCalculator(props.pokeData.stats[4].base_stat)}%`}}><div className='stats-gauge-value'>{props.pokeData.stats[4].base_stat}</div></div></div>
            <div>SPEED</div><div className='stats-gauge'>
              <div style={{width: `${gaugeCalculator(props.pokeData.stats[5].base_stat)}%`}}><div className='stats-gauge-value'>{props.pokeData.stats[5].base_stat}</div></div></div>
          </div>

        </div>

        <h2>ABILITIES</h2>
        <div className='stats-frame__battle-stats__abilities'>

          <div className='stats-frame__battle-stats__abilities__items'>
            <div>{pokeServices.upperFirstLetter(props.pokeData.abilities[0].ability.name)}</div>

            {(props.pokeData.abilities.length === 1) ? null :
              (props.pokeData.abilities[1].is_hidden === false) ?
                <div>{pokeServices.upperFirstLetter(props.pokeData.abilities[1].ability.name)}</div> 
              :
                null
            }
          </div>

          <div className='stats-frame__battle-stats__abilities__items--secret'>
            
            <div className='secret-ability'>Secret</div>
            


            {(props.pokeData.abilities.length === 1) ? <div>none</div> :
              (props.pokeData.abilities[1].is_hidden === false) ?
                <div>{(pokeServices.upperFirstLetter(props.pokeData.abilities[2].ability.name))}</div>
                :
                <div>{pokeServices.upperFirstLetter(props.pokeData.abilities[1].ability.name)}</div>
            }           



          </div>
          
        </div>
      </div>

      <div className='stats-frame__desc'>
        <h2>DESCRIPTION</h2>
        <p>{desc}</p>
        <div className='stats-frame__desc__details'>
          <div>
            <h2>WEIGHT</h2>
            <p>{props.pokeData.weight} kilos</p>
          </div>
          <div>
            <h2>HEIGHT</h2>
            <p>{props.pokeData.height} meters</p>
          </div>
          <div>
            <h2>BASE EXP</h2>
            <p>{props.pokeData.base_exp}</p>
          </div>
        </div>
      </div>
    </div>

  );
}