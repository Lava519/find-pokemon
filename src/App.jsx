import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home'
import Search from './components/Search'
import Pokemon from './components/Pokemon';
import Loading from './components/Loading'


function App() {

  const URL="https://pokeapi.co/api/v2/";
  const [pokemonList, setPokemonList] = useState([]);
  const [state, setState] = useState("Home");
  const [loading, setLoading] = useState(true)
  async function getPokemonList() {
    let {data} = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=-1");
    let pl = [];
    data.results.forEach((item) => {
      pl.push(item.name);
    })
    setPokemonList(pl);
  }
  useEffect(()=>{
    getPokemonList();
  },[])
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
      {loading ? 
      <Loading active={pokemonList > 0} trigger={()=>{setLoading(false)}}></Loading> : 
      stateSwitch(state, setState, pokemonList)
      }
    </div>
    </>
  )
}

function stateSwitch(state, setState, pokemonList) {
  switch (state) {
    case "Home":
      return (<Home state={setState}></Home>);
      break;
    case "Search":
      return (<Search state={setState} pokeList={pokemonList}></Search>);
      break;
    case "Pokemon":
      return (<Pokemon state={setState}></Pokemon>);
      break;
    default:
      break;
  }
}

export default App
