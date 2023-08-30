import { CLientOnlyApp } from "@/app/client/ClientOnlyApp"
import { ClientPropsOnlyFirstLevel } from "@/app/client/ClientPropsOnlyFirstLevel"
import { getPokemonList } from "@/lib/pokemonApi"

const Page = (props: {
    pokemons: {
        results: {
            name: string;
            url: string;
        }[];
    }
}) => {
    return (
        <main className="mx-auto max-w-screen-md max-h-[90vh]">
            <h1>Client side only rendering</h1>
            <p>Bellow is the react component that will render only on the client</p>
            {/* <CLientOnlyApp /> */}
            <ClientPropsOnlyFirstLevel pokemonNamesList={props.pokemons.results} />
        </main>
    )
}

export const getServerSideProps = async () => {
    const pokemons = await getPokemonList()
    // business logic here based on used components??
    return {
        props: { pokemons }
    }
}

export default Page
