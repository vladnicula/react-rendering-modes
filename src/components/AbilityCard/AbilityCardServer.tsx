import { useEffect, useState } from "react"
import { getPokemonAbilityEffect } from "@/lib/pokemonApi"

export const AbilityCardServer = async (props: { abilityName: string }) => {
    const abilityDetail = await getPokemonAbilityEffect(props.abilityName)

    return <div><h5 className="font-bold">{props.abilityName}</h5>{abilityDetail}</div>
}

