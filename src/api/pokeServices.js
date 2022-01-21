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
            sprites_evolve : data.sprites.versions['generation-viii'].icons.front_default,
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
    async getEvolve (id) {
        let evolveArray = []
        const data = await this.fetchChain(id)
            if(data.chain.evolves_to.length === 0) {
                return false
            } else {
                evolveArray.push(data.chain.evolves_to[0].species)
                if (data.chain.evolves_to[0].evolves_to.length !== 0) {
                    evolveArray.push(data.chain.evolves_to[0].evolves_to[0].species)
                }
            }
        return evolveArray
        },
    upperFirstLetter (string) {
        return string.charAt(0).toUpperCase()+ string.slice(1)
    }   
}

export default pokeServices

//https://pokeapi.co/api/v2/pokemon/1