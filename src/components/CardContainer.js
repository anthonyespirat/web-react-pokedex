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
      setPokedex([])
      getAllPokemon()
      
    }, [])




  return (
    <div className='card-container'>
      {pokedex.length >= 1 ?
        pokedex.filter((pokemon) => {
          if (inputValue === '') {
            return pokemon
          }
          else if (pokemon.name.toLowerCase().includes(inputValue.toLowerCase())) {
            return pokemon
          }
        })
      .map((pokemon)=> (
      <Card id={pokemon.id} key={pokemon.id} pokeData={pokemon}/>  
      ))
      
      : <p> Loading ...  </p>}
    </div>
  )  
  
}




//