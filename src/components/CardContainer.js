import { useContext, useEffect, useState } from 'react';
import InputContext from '../context/Input';
import Card from './Card'
import pokeServices from '../api/pokeServices'

import './CardContainer.css'




export default function CardContainer (){
    const [pokedex, setPokedex] = useState([]);
    const inputValue = useContext(InputContext)

    const maxPokemon = 151;

    async function getAllPokemon() {
      for (let i = 1; i < maxPokemon + 1; i++) {
        const pokemon = await pokeServices.fetchPokemon(i)
        const formatPokemon = await pokeServices.formatPokeApi(pokemon)
        await setPokedex(oldData => [...oldData,formatPokemon])
      }
    }

    useEffect(()=> {
      async function renderPokemon() {
        if (inputValue === '') {
          setPokedex([])
          getAllPokemon()
        } else {
          const results = pokedex.filter(pokemon =>
            pokemon.name.toLowerCase().includes(inputValue)
          );
          setPokedex(results)
        }
      }
      renderPokemon()
    }, [inputValue])




  return (
    <div className='card-container'>
      {pokedex.length >= 1 ?

      pokedex.map((pokemon)=> (
      <Card id={pokemon.id} key={pokemon.id} pokeData={pokemon}/>  
      ))
      
      : <p> Sorry, no results match your request.  </p>}
    </div>
  )  
  
}




//