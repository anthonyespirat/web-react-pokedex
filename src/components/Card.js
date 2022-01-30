import './Card.css'
import { useEffect, useState } from 'react'
import Types from './Types'
import pokeServices from '../api/pokeServices'
/* gen 3 end at 386 */
const Card = () => {

    const [pokeData, setPokeData] = useState({})
    const [evolution, setEvolution] = useState([])
    const [loading, setLoading] = useState(false)
    


    useEffect(()=> {
        pokeServices.fetchPokemon(6).then((data)=>{
            setPokeData(pokeServices.formatPokeApi(data))
        });
         pokeServices.getEvolve(6).then((data)=> {
            for (const pokemon of data) {
                let pokeId = pokemon.url.slice(42).slice(0,-1);
                pokeServices.fetchPokemon(pokeId).then( async data => {
                    data = pokeServices.formatPokeApi(data)
                    await setEvolution(oldData => [...oldData,data])
                    })
                }
            })
    }, [])

        return (
            // Object.entries transform objects in array, then check if statement is true
            Object.entries(pokeData).length > 0  &&

            <div className='card'>
                <div className="card__title">
                    <div className='card__id'>n°{pokeData.id}</div>
                    <div className='card__name'>{pokeServices.upperFirstLetter(pokeData.name)}</div>
                </div>
                <div className='card__sprite'>
                    <img src={pokeData.sprites} alt='Pokemon sprite'></img>
                </div>
                <Types types={pokeData.types} />
                <div className='card__evolv'>
                     
                </div>
            </div>
        );
};



export default Card;
