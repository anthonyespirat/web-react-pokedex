import './Card.css'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Types from './Types'
import pokeServices from '../api/pokeServices'
// import Evolves from './Evolves';

/* gen 3 end at 386 */

const Card = ({ pokeData }) => {
	useEffect(() => {
		/*
		pokeServices.fetchPokemon(props.id).then((data)=>{
				setPokeData(pokeServices.formatPokeApi(data))
		});

		 pokeServices.getEvolve(props.id).then((data)=> {
				for (const pokemon of data) {
						let pokeId = pokemon.url.slice(42).slice(0,-1);
						pokeServices.fetchPokemon(pokeId).then( async data => {
								data = pokeServices.formatPokeApi(data)
								await setEvolution(oldData => [...oldData,data])
								})
						}
				})
		*/
	}, [])

	return (

		// Object.entries transform objects in array, then check if statement is true
		Object.entries(pokeData).length > 0 &&
		<>
			<Link to={`${pokeData.id}`} className='card'>
				<div className="card__title">
					<div className='card__id'>n°{pokeData.id}</div>
					<div className='card__name'>{pokeServices.upperFirstLetter(pokeData.name)}</div>
				</div>
				<div className='card__sprite'>
					<img src={pokeData.sprites} alt={`${pokeData.name} sprite`}></img>
				</div>
				<Types types={pokeData.types} />
				{/* <div className='card__evolv'>
                    <Evolves evolve={evolution} />
									</div> */}
			</Link>
			<Outlet />
		</>
	);

};
export default Card;