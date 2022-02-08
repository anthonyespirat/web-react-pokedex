import pokeServices from '../api/pokeServices'
import './Types.css'

const Types = ({ types }) => {

	//    function upperFirstLetter (string) {
	//     return string.charAt(0).toUpperCase()+ string.slice(1)
	//     }  

	return (
		<div className='card__types'>
			{types && types.map((type) => (
				// 'value' gives some kind of ID in order to style all iterations
				<div key={type.slot} value={type.type.name} className='card__type'>{pokeServices.upperFirstLetter(type.type.name)}</div>
			))
			}

			{/* <div className='card__type'></div>
            <div className='card__type'></div> */}
		</div>
	);
};

export default Types;