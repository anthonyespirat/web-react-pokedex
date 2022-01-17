const pokeServices = {
   async fetchPokemon (id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        return data
    } ,
    formatPokeApi (data) {
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
    async fetchEvolution(id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        const data = await response.json()
        const chainUrl = data.evolution_chain.url
        return chainUrl
    },
    async fetchChain(id) {
        const chainUrl = await this.fetchEvolution(id)
        const response = await fetch(chainUrl)
        const data = await response.json()
        return data
        
    },
    upperFirstLetter (string) {
        return string.charAt(0).toUpperCase()+ string.slice(1)
    }   
}

export default pokeServices

//https://pokeapi.co/api/v2/pokemon/1