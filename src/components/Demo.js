import React, { useCallback, useMemo, useState } from 'react'
import { nthPrimeNumber } from '../utils/helper'

const Demo = () => {
    const [input, setInput] = useState(0);
    const [toggle, setToggle] = useState(true);
 
    //without memoization 
    // const prime1 = ()=>{
    //     return nthPrimeNumber(input)
    // }

    // with memoization
    const prime = useMemo(() => nthPrimeNumber(input), [input])

    
    return (
        <div className={toggle ? "w-96 h-96 border border-gray-500" : "bg-gray-800 w-96 h-96 border border-gray-500"}>
            <button onClick={() => {
                setToggle(!toggle);
            }} className='px-4 py-1 bg-green-200 rounded-lg'>Toogle</button>
            <br />
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} className='outline-none border border-gray-500 px-2' />
            <h1>Nth Prime Number: {prime}</h1>
        </div>
    )
}

export default Demo