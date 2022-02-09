import pokeServices from '../api/pokeServices';

import './PokemonViewStats.css'

export default function PokemonViewStats(props) {

  return (

    <div className='stats-frame'>

      <div className='stats-frame__battle-stats'>
        <h2>BASE STATS</h2>
        <div className='gauges-container'>
          <div>
            <div>HP</div><div className='stats-gauge'><div><div className='stats-gauge-value'>60</div></div></div>
            <div>ATTACK</div><div className='stats-gauge'><div><div className='stats-gauge-value'>60</div></div></div>
            <div>DEFENSE</div><div className='stats-gauge'><div><div className='stats-gauge-value'>60</div></div></div>
          </div>
          <div>
            <div>ATK SPE</div><div className='stats-gauge'><div><div className='stats-gauge-value'>60</div></div></div>
            <div>DEF SPE</div><div className='stats-gauge'><div><div className='stats-gauge-value'>60</div></div></div>
            <div>SPEED</div><div className='stats-gauge'><div><div className='stats-gauge-value'>60</div></div></div>
          </div>
        </div>
        <h2>ABILITIES</h2>
        <div className='stats-frame__battle-stats__abilities'>
          <div className='stats-frame__battle-stats__abilities__items'>
            <div>Green power</div>
            <div>Power but greener</div>
          </div>
          <div className='stats-frame__battle-stats__abilities__items--secret'>
            <div className='secret-ability'>Secret</div>
            <div>Secret green talent</div>
          </div>
        </div>
      </div>

      <div className='stats-frame__desc'>
        <h2>DESCRIPTION</h2>
        <p>Strange seed was planted on its back at birth.The plant sprouts and grows with  this POKéMON.</p>
        <div className='stats-frame__desc__details'>
          <div>
            <h2>WEIGHT</h2>
            <p>6.9 kilos</p>
          </div>
          <div>
            <h2>HEIGHT</h2>
            <p>0.7 meters</p>
          </div>
          <div>
            <h2>BASE EXP</h2>
            <p>64</p>
          </div>
        </div>
      </div>
    </div>

  );
}