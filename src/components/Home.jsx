import { useState } from 'react'
import { stateChange } from '../utils';

function Home({state, pokeList}) {
  const [currAnimation, setCurrAnimation] = useState("animate-[pop-in_0.5s_forwards]")
  function handleClick(location){
    if (location === "Search") {
      stateChange(setCurrAnimation, 'pop-out', state, location, 500);
    } else {
      let poke = Math.floor(Math.random() * pokeList.length-1);
      stateChange(setCurrAnimation, 'pop-out', state, pokeList[poke], 500);
    }

  }
  return (
    <div className={`flex flex-col gap-6 ${currAnimation}`}>
        <button className='hidden'></button>
        <button onClick={()=>{handleClick("Search")}} className='bg-poke-red px-24 py-4 text-4xl rounded-full'>Search Pokemon</button>
        <button onClick={()=>{handleClick("Pokemon")}} className='bg-poke-white text-poke-black px-24 py-4 text-4xl rounded-full'>Random Pokemon</button>
    </div>
  )
}

export default Home
