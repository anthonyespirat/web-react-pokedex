import './Card.css'
import { useEffect, useState } from 'react'
import Types from './Types'
import miniBulbi from '../assets/mini-bulbi.png'
import pokeServices from '../api/pokeServices'
/* gen 3 end at 386 */
const Card = () => {

    const [pokeData, setPokeData] = useState({})
    const [evolution, setEvolution] = useState()

    useEffect(()=> {
        pokeServices.fetchPokemon(4).then((data)=>{
            setPokeData(pokeServices.formatPokeApi(data))
        });
        pokeServices.fetchChain(4).then((data)=>  {
            console.log(data);
            setEvolution(data)
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
                    <img src={miniBulbi} alt='Pokemon evolution sprite'></img>
                    <img src={miniBulbi} alt='Pokemon evolution sprite'></img>
                </div>
            </div>
        );
};



export default Card;
