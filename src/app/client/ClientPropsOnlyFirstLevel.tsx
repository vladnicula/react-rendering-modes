import { PokemonCard } from "@/components/PokemonCard/PokemonCard"

export const ClientPropsOnlyFirstLevel = (props: {pokemonNamesList: Array<{name: string, url: string}>}) => {
    return (
        <>
            <h3>I should only render on the Client (Browser only)</h3>
            <div className="flex flex-wrap gap-20">
                {props.pokemonNamesList.map(({ name }) => (
                    <PokemonCard key={name} pokemonName={name} />
                ))}
            </div>
        </>
    )
}
