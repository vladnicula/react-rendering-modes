"use client"

import { useEffect, useState } from "react"
import { getPokemonList } from "@/lib/pokemonApi"
import { PokemonCard } from "@/components/PokemonCard/PokemonCard"

export const CLientOnlyApp = () => {
    const [pokemonNamesList, setPokemoneNamesList] = useState<
    {
      url: string;
      name: string;
    }[]
  >([])

    useEffect(() => {
        const run = async () => {
            const pokemonNames = await getPokemonList()
            setPokemoneNamesList(pokemonNames.results)
        }

        run()
    }, [])

    return (
        // ClientPropsOnlyFirstLevel
        <>
            <h3>I should only render on the Client (Browser only)</h3>
            <div className="flex flex-wrap gap-20">
                {pokemonNamesList.map(({ name, url }) => (
                    <PokemonCard key={name} pokemonName={name} />
                ))}
            </div>
        </>
    )
}
