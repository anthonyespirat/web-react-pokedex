import './Evolves.css'

const Evolves = ({evolve}) => {
    console.log(evolve);

   if (evolve[0]) {
       return (
           evolve.map(ev => (
               <img key={ev.id} src={ev.sprites} alt="" />
           ))
       )
   } else {
       return (
           <div></div>
       )
   }
}

export default Evolves;
