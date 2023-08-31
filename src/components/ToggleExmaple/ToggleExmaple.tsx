'use client'
import React, { ReactNode, useState } from 'react'

export const ToggleExmaple = (props: { children: ReactNode}) => {
    const [isToggled, setIsStoggled] = useState(false)
    return (
        <div
        >
            <button  onClick={() => {
                setIsStoggled(t => !t)
            }}>Toggle</button>
            {isToggled ? props.children : null}
        </div>
    )
}