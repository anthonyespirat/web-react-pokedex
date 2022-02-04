import Card from './Card'

import './CardContainer.css'


const pokedex = [];
for (let i = 1; i < 152
  ; i++) {
  pokedex.push(<Card id={i}/>)
}


export default function CardContainer (){
 
  return (
    <div className='card-container'>
      {pokedex}
    </div>
  )  
  
}




//