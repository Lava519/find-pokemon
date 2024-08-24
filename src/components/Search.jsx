import { useState } from 'react'

function Search({state}) {
  const [currAnimation, setCurrAnimation] = useState("animate-[pop-in_0.5s_forwards]")
  function handleSubmit(e){
    e.preventDefault();
    setCurrAnimation("animate-[pop-out_0.5s_forwards]");
    setTimeout(() => {
      state("Pokemon");
    }, 500);
  }
  return (
    <form onSubmit={handleSubmit} className={`flex ${currAnimation}`}>
        <input className='text-center text-poke-black outline-none p-4 pr-[65px] text-2xl bg-poke-white rounded-3xl min-w-80' /><button action="submit" className='ml-[-60px] rounded-xl p-2 bg-poke-red flex justify-cemter items-center'><img src="./search.svg"></img></button>
    </form>
  )
}

export default Search
