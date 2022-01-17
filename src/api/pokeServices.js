const pokeServices = {
   async fetchPokemon (id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        return data
    } ,
    formatPokeApi (data) {
        console.log(data);
        if (data) {
        const formatPokemon = {
            id : data.id,
            name : this.upperFirstLetter(data.name),
            sprites : data.sprites.versions['generation-iii'].emerald.front_default,
            types : data.types,
        }

    
        
        return formatPokemon
     }
    },
    fetchSpecies(id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        const data = await response.json()
        return data
    },
    upperFirstLetter (string) {
        return string.charAt(0).toUpperCase()+ string.slice(1)
    }   
}

export default pokeServices

//https://pokeapi.co/api/v2/pokemon/1