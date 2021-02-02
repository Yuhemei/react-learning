import React, { useState } from 'react'

export default function HookExample() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <P>You Clicked {count} times</P>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    )
}
