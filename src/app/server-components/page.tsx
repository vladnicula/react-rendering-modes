import { PokemonCardServer } from "@/components/PokemonCard/PokemonCardServer"
import { ToggleExmaple } from "@/components/ToggleExmaple/ToggleExmaple"
import { getPokemonList } from "@/lib/pokemonApi"

export default async function Page() {
    const pokemonNames = await getPokemonList()

    return (
        <main className="mx-auto max-w-screen-md max-h-[90vh]">
            <h1>Server side only rendering</h1>
            <p>Bellow is the react component that will render only on the server</p>
            <div className="flex flex-wrap gap-20">{
                pokemonNames.results.map(({name}) => {
                    return (
                        <ToggleExmaple key={name}>
                            <PokemonCardServer pokemonName={name} />
                        </ToggleExmaple>
                    )
                })
            }
            </div>
        </main>
    )
}
