import { useEffect, useState } from "react"
import { AbilityCard } from "../AbilityCard/AbilityCard"

import { getPokemonDetails } from "@/lib/pokemonApi"

export const PokemonCard = (props: { pokemonName: string; }) => {
    const [pokemonDetails, setPokemonDetails] = useState<{
    icon: string;
    abilities: {
      name: string;
      url: string;
    }[];
  } | null>(null)

    useEffect(() => {
        const run = async () => {
            const details = await getPokemonDetails(props.pokemonName)
            setPokemonDetails(details)
        }
        run()
    }, [props.pokemonName])

    return (
        <div>
            {pokemonDetails ? (
                <div className="flex gap-4 max-w-xs">
                    <div>
                        <img src={pokemonDetails.icon} alt={`${props.pokemonName} icon`} />
                        <h4>Pokemon: {props.pokemonName}</h4>
                    </div>
                    <div className="flex flex-col gap-4">
                        {pokemonDetails.abilities.map((ability) => {
                            return <AbilityCard key={ability.url} abilityName={ability.name} />
                        })}
                    </div>
                </div>
            ) : <h4>Pokemon: {props.pokemonName}</h4>}
        </div>
    )
}
