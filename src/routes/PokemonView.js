import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import pokeServices from "../api/pokeServices";

import Types from "../components/Types";

export default function PokemonView() {

  const params = useParams(),
        [pokeData, setPokeData] = useState([])

	useEffect(() => {
		pokeServices.fetchPokemon(params.pokemonId).then((data)=>{
				setPokeData(pokeServices.formatPokeApi(data))
		});
	}, [])

  console.log(pokeData);

  return(

		Object.entries(pokeData).length > 0 &&
    <div className='main'>

      <div className='main__spriteFrame'>
        <div className='main__spriteFrame__sprite'>
				  <div className='main__spriteFrame__sprite__id'>n°{pokeData.id}</div>
          <div className='main__spriteFrame__sprite__img'>
            <img src={pokeData.sprites} alt={`${pokeData.name} sprite`}></img>
          </div>    
        </div>
        <div className='main__spriteFrame__name'>{pokeServices.upperFirstLetter(pokeData.name)}</div>
				<Types types={pokeData.types} />
      </div>

      <div className='main__statsFrame'>
        <div className='main__statsFrame__battleStats'>
          <h2>BASE STATS</h2>
          <div className='main__statsFrame__battleStats__baseStats'>
            <div>
              <div>HP</div><div className='statsGauge'>60</div>
              <div>ATTACK</div><div className='statsGauge'>60</div>
              <div>DEFENSE</div><div className='statsGauge'>60</div>
            </div>
            <div>
              <div>ATK SPE</div><div className='statsGauge'>60</div>
              <div>DEF SPE</div><div className='statsGauge'>60</div>
              <div>SPEED</div><div className='statsGauge'>60</div>
            </div>  
          </div>
          <h2>ABILITIES</h2>
          <div className='main__statsFrame__battleStats__abilities'>
            <div className='main__statsFrame__battleStats__abilities__items'></div>
            <div className='main__statsFrame__battleStats__abilities__items--secret'></div>
          </div>
        </div>

        <div className='main__statsFrame__Desc'>
          <h2>DESCRIPTION</h2>
          <p>Strange seed was planted on its back at birth.The plant sprouts and grows with  this POKéMON.</p>         
          <div className='main__statsFrame__Desc__details'>
            <h2>WEIGHT</h2><div>6.9 kilos</div>
            <h2>HEIGHT</h2><div>0.7 meters</div>
            <h2>BASE EXP</h2><div>64</div>
          </div>
        </div>
      </div>

    </div>
    
  )
}