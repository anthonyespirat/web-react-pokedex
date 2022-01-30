import './Evolves.css'
import { useEffect, useState } from 'react';
import pokeServices from '../api/pokeServices'

const Evolves = ({evolve}) => {

    const [evolution, setEvolution] = useState();

    useEffect(()=> {
        pokeServices.getEvolve(6).then((data)=>  {
            if (data) {
                const evolvesResult = []
                for (let pokemon of data) {
                    let evolveId = pokemon.url.slice(42).slice(0, -1)
                    pokeServices.fetchPokemon(evolveId).then(data =>{
                    let dataFormated = pokeServices.formatPokeApi(data)
                    evolvesResult.push(dataFormated)
                    })
                 }
                 setEvolution(evolvesResult)
            } else {
                return
            }
        })

    }, [])

    if(evolution[0]) {
        return (
        <p>{evolution[0]}</p>
        )
    } else {
        return <p>nothing</p>
    }


}

export default Evolves;
