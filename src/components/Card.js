import './Card.css'
import bulbi from '../assets/bulbi.png'
import miniBulbi from '../assets/mini-bulbi.png'


const Card = () => {
    return (
        <div className='card'>
            <div className="card__title">
                <div className='card__id'>n°1</div>
                <div className='card__name'>Bulbasaur</div>
            </div>
            <div className='card__sprite'>
                <img src={bulbi} alt='Pokemon sprite'></img>
            </div>
            <div className='card__types'>
                <div className='card__type'>Grass</div>
                <div className='card__type'>Poison</div>
            </div>
            <div className='card__evolv'>
                <img src={miniBulbi} alt='Pokemon evolution sprite'></img>
                <img src={miniBulbi} alt='Pokemon evolution sprite'></img>
            </div>
        </div>
    );
};



export default Card;
