import React, { useRef, useState } from 'react'

const Demo2 = () => {
    const[val, setVal] = useState(0);

    let x = 0;

    const ref = useRef(0);
    /**
     *  is not like that => ref = 0
     *  ref.current = ref.current
     */

    return (
        <div className='w-96 h-96 border border-gray-500'>
            <div>

                <button onClick={() => {
                    x = x + 1
                    console.log("x = "+ x);
                }} className='bg-green-100 px-4 py-1'>Increase x</button>
                <span>let x = {x}</span>
            </div>
            <div className='mt-2'>
                <button onClick={() => {
                    setVal(val+1)
                    console.log("state = "+ val);
                }} className='bg-green-100 px-4 py-1'>Increase state</button>
                <span>state = {val}</span>
            </div>
            <div className='mt-2'>
                <button onClick={() => {
                    ref.current = ref.current+1;
                    console.log("ref = " + ref.current);
                }} className='bg-green-100 px-4 py-1'>Increase ref</button>
                <span>ref = {ref.current}</span>
            </div>
        </div>
    )
}

export default Demo2