import { useEffect, useState } from 'react'
import StatBar from './StatBar';
import Types from './Types';
import axios from 'axios';
import { Initialize, Height, Weight } from '../utils';

function Pokemon({pokemon, state}) {
  const [currAnimation, setCurrAnimation] = useState("animate-[pop-in_0.5s_forwards]");
  const [loaded, setLoaded] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(()=> {
    async function fetchPokemon() {
      let {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);  
      setPokemonData(data);
    }
    fetchPokemon();
  },[]);
  function handleBack(e){
    e.preventDefault();
    setCurrAnimation("animate-[pop-out_0.5s_forwards]");
    setTimeout(() => {
      state("Home");
    }, 500);
  }
  return (
    <div className='grow mx-20'>
      {pokemonData && <img className='hidden' onLoad={()=>{setLoaded(true)}} src={pokemonData.sprites.other["official-artwork"].front_default}></img>}
      <button onClick={handleBack} className='z-50 animate-[pop-in-delayed_0.5s_forwards] absolute top-16 left-16 rounded-full bg-poke-gray p-6'><img src="./back.svg"></img></button>
      {
        loaded &&
        <div className={`flex flex-col gap-10 ${currAnimation} lg:flex-row sc-h:mt-[150px]`}>
          <div className='flex basis-3/5 bg-poke-gray p-4 min-w-[350px] rounded-2xl'>
            <div className='bg-poke-black rounded-2xl'>
              <img src={pokemonData.sprites.other["official-artwork"].front_default}></img>
            </div>
            <ul className='flex flex-col justify-evenly min-w-52 px-4'>
              <li>Name: {Initialize(pokemonData.name)}</li>
              <li>Type: <Types types={pokemonData.types}></Types></li>
              <li>ID: {pokemonData.id}</li>
              <li>Height: {Height(pokemonData.height)}</li>
              <li>Weight: {Weight(pokemonData.weight)}</li>
            </ul>
          </div>
          <ul className='flex flex-col gap-2 justify-evenly basis-9/12 bg-poke-gray p-4 rounded-2xl'>
            <li><StatBar title={pokemonData.stats[0].stat.name} value={pokemonData.stats[0].base_stat}></StatBar></li>
            <li><StatBar title={pokemonData.stats[1].stat.name} value={pokemonData.stats[1].base_stat}></StatBar></li>
            <li><StatBar title={pokemonData.stats[2].stat.name} value={pokemonData.stats[2].base_stat}></StatBar></li>
            <li><StatBar title={pokemonData.stats[3].stat.name} value={pokemonData.stats[3].base_stat}></StatBar></li>
            <li><StatBar title={pokemonData.stats[4].stat.name} value={pokemonData.stats[4].base_stat}></StatBar></li>
            <li><StatBar title={pokemonData.stats[5].stat.name} value={pokemonData.stats[5].base_stat}></StatBar></li>
          </ul>
        </div>
      }
    </div>
  )
}

export default Pokemon
