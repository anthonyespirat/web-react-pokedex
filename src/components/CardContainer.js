import { useContext, useEffect, useState } from 'react';
import InputContext from '../context/Input';
import Card from './Card'
import pokeServices from '../api/pokeServices'

import './CardContainer.css'

export default function CardContainer() {
  const [pokedex, setPokedex] = useState([]);
  const inputValue = useContext(InputContext)
  const [loading, setLoading] = useState(false)

  const maxPokemon = 151;

  async function getAllPokemon() {
    let pokemonArray = []
    for (let i = 1; i < maxPokemon + 1; i++) {
      const pokemon = await pokeServices.fetchPokemon(i)
      const formatPokemon = await pokeServices.formatPokeApi(pokemon)
      await pokemonArray.push(formatPokemon)
      //await setPokedex(oldData => [...oldData, formatPokemon])
      setLoading(true)
    }
    localStorage.setItem('pokedexdesbrow', JSON.stringify(pokemonArray))
  }

  async function setPokemonFromLocalStorage () {
    if (localStorage.getItem('pokedexdesbrow')) {
      setPokedex(JSON.parse(localStorage.getItem('pokedexdesbrow')))
      setLoading(true)
    } else {
      await getAllPokemon()
      setPokedex(JSON.parse(localStorage.getItem('pokedexdesbrow')))
    }
  }

  useEffect(() => {
    setPokedex([])
    setPokemonFromLocalStorage()

  }, [])

  return (

    <div className='card-container'>
      {pokedex.length >= 151 && loading ?
        pokedex.filter((pokemon) => {
          if (inputValue === '') {
            return pokemon
          }
          else if (pokemon.name.toLowerCase().includes(inputValue.toLowerCase())) {
            return pokemon
          }
        })
          .map((pokemon) => (
            <Card id={pokemon.id} key={pokemon.id} pokeData={pokemon} />
          ))

        : <p> Loading ...  </p>}
    </div>

  )
}