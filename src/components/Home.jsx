import { useState } from 'react'

function Home({state}) {
  const [currAnimation, setCurrAnimation] = useState("animate-[pop-in_0.5s_forwards]")
  function handleClick(location){
    setCurrAnimation("animate-[pop-out_0.5s_forwards]");
    setTimeout(() => {
      state(location);
    }, 500);
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
