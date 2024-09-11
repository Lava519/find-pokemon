import { useState } from 'react'
import { Initialize } from '../utils';

function Search({state, pokeList, query}) {
  const [currAnimation, setCurrAnimation] = useState("animate-[pop-in_0.5s_forwards]");
  const [currPokemon, setCurrPokemon] = useState(null);
  const [autocomplete, setAutocomplete] = useState([]);
  function handleSearchChange(e) {
    e.preventDefault();
    let k = [];
    let query = e.target.value.toLowerCase();
    if (query.length > 1) {
      let pattern = new RegExp(`^${query}`)
      for (let i = 0; i < pokeList.length; ++ i) {
        if (k.length > 4)
          break;
        if (pattern.test(pokeList[i])) {
          k.push({id: k.length+1, name: pokeList[i]});
        }
      }
    }
    setAutocomplete(k);
    if (k.length > 0)
      setCurrPokemon(k[0].name);
    else
      setCurrPokemon(null);
  }

  function handleBack(e){
    e.preventDefault();
    setCurrAnimation("animate-[pop-out_0.5s_forwards]");
    setTimeout(() => {
      state("Home");
    }, 500);
  }

  function selectPokemon(pokemon) {
    if (pokemon) {
      setCurrAnimation("animate-[pop-out_0.5s_forwards]");
      setTimeout(() => {
        state(pokemon);
      }, 500);
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    if (currPokemon) {
      setCurrAnimation("animate-[pop-out_0.5s_forwards]");
      setTimeout(() => {
        state(currPokemon);
      }, 500);
    }
  }
  return (
    <div className={`flex h-screen w-screen items-center justify-center ${currAnimation}`}>
    <button onClick={handleBack} className='animate-[pop-in-delayed_0.5s_forwards] absolute top-16 left-16 rounded-full bg-poke-gray p-6'><img src="./back.svg"></img></button>
    <form onSubmit={handleSubmit} className='relative flex'>
        <input onChange={handleSearchChange} className='text-center text-poke-black outline-none p-4 pr-[65px] text-2xl bg-poke-white rounded-3xl min-w-80' /><button action="submit" className='ml-[-60px] rounded-xl p-2 bg-poke-red flex justify-cemter items-center'><img src="./search.svg"></img></button>
        <div className='absolute top-full flex flex-col items-center w-full gap-6 bg-poke-gray rounded-3xl'>
          {autocomplete.map((pokemon)=> {
            return (
              <a onClick={()=>{selectPokemon(pokemon.name)}} className="text-3xl cursor-pointer transition hover:scale-110 py-1" key={pokemon.id}>{Initialize(pokemon.name)}</a>
            )
          })}
        </div>
    </form>
    </div>

  )
}

export default Search
