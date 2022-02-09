import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import pokeServices from "../api/pokeServices";
import Layout from '../components/Layout'
import PokemonViewSprite from "../components/PokemonViewSprite";
import PokemonViewStats from "../components/PokemonViewStats";

import Types from "../components/Types";

import "./PokemonView.css";

export default function PokemonView() {

  const params = useParams(),
    [pokeData, setPokeData] = useState([])

  useEffect(() => {
    pokeServices.fetchPokemon(params.pokemonId).then((data) => {
      setPokeData(pokeServices.formatPokeApi(data))
    });
  }, [])

  console.log(pokeData);

  return (

    <Layout>

      {Object.entries(pokeData).length > 0 &&
        <div className='pokemonview'>
          
          <PokemonViewSprite pokeData={pokeData} />

          <PokemonViewStats pokeData={pokeData}/>

        </div>}

    </Layout>

  )
}