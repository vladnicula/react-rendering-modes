"use client"
import { useEffect, useState } from "react"
import { CLientOnlyApp } from "./ClientOnlyApp"

/**
 * This is just a hack for forcing the client only rendering
 * in NextJS 13. By default, with the new app folder, components
 * get rendered on the serverside as well as on the client.
 *
 * We use a flag that is false on the server, and only set it
 * to true on the client after the `onMount` happened (so a
 * useEffect with `[]` as dependencies)
 */

export default function Home() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <main className="mx-auto max-w-screen-md max-h-[90vh]">
            <h1>Client side only rendering</h1>
            <p>By default, the mounted flag is {String(mounted)}</p>
            <p>Bellow is the react component that will render only on the client</p>
            {mounted ? <CLientOnlyApp /> : "server rendered"}
        </main>
    )
}
