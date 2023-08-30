import { useEffect, useState } from "react"
import { getPokemonAbilityEffect } from "@/lib/pokemonApi"

export const AbilityCard = (props: { abilityName: string }) => {
    const [abilityDetail, setAbilityDetail] = useState<string | null>(null)

    useEffect(() => {
        const run = async () => {
            const result = await getPokemonAbilityEffect(props.abilityName)
            setAbilityDetail(result)
        }
        run()
    }, [props.abilityName])

    if (!abilityDetail) {
        return null
    }

    return <div><h5 className="font-bold">{props.abilityName}</h5>{abilityDetail}</div>
}
