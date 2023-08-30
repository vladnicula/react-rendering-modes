export const POKEMON_ENDPOINT_URL = "https://pokeapi.co/api/v2"


export const getPokemonList = async () => {
    const response = await fetch(
        `${POKEMON_ENDPOINT_URL}/pokemon?limit=5&offset=0`
    )
    const json = await response.json()
    return json as {
    results: {
      name: string;
      url: string;
    }[];
  }
}

export const getPokemonDetails = async (pokemonName: string) => {
    const result = await fetch(`${POKEMON_ENDPOINT_URL}/pokemon/${pokemonName}`)
    const json = await result.json()
    return {
        icon: json.sprites.front_default as string,
        abilities: json.abilities.map((a: any) => a.ability) as {
      name: string;
      url: string;
    }[],
    }
}

export const getPokemonAbilityEffect = async (abilityName: string) => {
    console.log('running getPokemonAbilityEffect', abilityName)
    const result = await fetch(`${POKEMON_ENDPOINT_URL}/ability/${abilityName}`)
    const json = (await result.json()) as {
    effect_entries: Array<{
      effect: string;
      language: {
        name: string;
      };
    }>;
  }

    const effectNameInEnglish = json.effect_entries.find((item) => {
        return item.language.name === "en"
    })

    return effectNameInEnglish?.effect ?? null
}

