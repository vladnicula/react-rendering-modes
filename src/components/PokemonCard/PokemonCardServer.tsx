import { AbilityCardServer } from "../AbilityCard/AbilityCardServer"
import 'server-only'

import { getPokemonDetails } from "@/lib/pokemonApi"

export const PokemonCardServer = async (props: { pokemonName: string; }) => {
    const pokemonDetails = await getPokemonDetails(props.pokemonName)

    return (
        <div className="flex gap-4 max-w-xs">
            <div>
                <img src={pokemonDetails.icon} alt={`${props.pokemonName} icon`} />
                <h4>Pokemon: {props.pokemonName}</h4>
            </div>
            <div className="flex flex-col gap-4">
                {pokemonDetails.abilities.map((ability) => {
                    return <AbilityCardServer key={ability.url} abilityName={ability.name} />
                })}
            </div>
        </div>
    )
}
