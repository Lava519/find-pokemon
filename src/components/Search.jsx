import { useState } from 'react'

function Search({state, pokeList}) {
  const [currAnimation, setCurrAnimation] = useState("animate-[pop-in_0.5s_forwards]")
  const [autocomplete, setAutocomplete] = useState([]);
  function handleSearchChange(e) {
    e.preventDefault();
    let k = [];
    if (e.target.value.length > 1) {
      let pattern = new RegExp(`^${e.target.value}`)
      for (let i = 0; i < pokeList.length; ++ i) {
        if (k.length > 4)
          break;
        if (pattern.test(pokeList[i])) {
          k.push({id: k.length+1, name: pokeList[i]});
        }
      }
      console.log(k);

    }
    setAutocomplete(k);
  }
  function handleSubmit(e){
    e.preventDefault();
    setCurrAnimation("animate-[pop-out_0.5s_forwards]");
    console.log(pokeList);
    setTimeout(() => {
      state("Pokemon");
    }, 500);
  }
  return (
    <div>
    <form onSubmit={handleSubmit} className={`relative flex ${currAnimation}`}>
        <input onChange={handleSearchChange} className='text-center text-poke-black outline-none p-4 pr-[65px] text-2xl bg-poke-white rounded-3xl min-w-80' /><button action="submit" className='ml-[-60px] rounded-xl p-2 bg-poke-red flex justify-cemter items-center'><img src="./search.svg"></img></button>
        <div className='absolute top-full flex flex-col items-center w-full gap-6'>
          {autocomplete.map((pokemon)=> {
            return (
              <a className="text-3xl" key={pokemon.id}>{pokemon.name}</a>
            )
          })}
        </div>
    </form>
    </div>

  )
}

export default Search
