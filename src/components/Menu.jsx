import { useEffect, useState } from 'react'

export default function Menu({state, setState, pokeList}) {
    const [active, setActive] = useState(false);
    useEffect(()=>{
        setActive(false);
    },[state])
    const toggleActive = () => {
        if (active)
            setActive(false);
        else
            setActive(true);
    }

    if (state === "Home")
        return null;
    else
        return (
            <div style={ active ? {width: "100%", height: "90px"} : {}} className={`absolute z-50 top-0 left-0 right-0 mx-auto w-32 h-12 bg-poke-gray rounded-b-full transition-all max-w-96 animate-[drop-down_0.5s_forwards]`}>
                {/*<button className='animate-[pop-in-delayed_0.5s_forwards] absolute top-16 left-16 rounded-full bg-poke-gray p-6'><img src="./back.svg"></img></button>*/}
                {isActive(active, toggleActive, setState, pokeList)}
            </div>
        )
}

function isActive(active, toggleActive, setState, pokeList) {
    function getRandomPokemon() {
        let poke = pokeList[Math.floor(Math.random() * pokeList.length-1)];
        setState(poke);
    }
    if (active)
        return (
            <div className="pb-8">
                <div className="animate-[drop-down_0.15s_forwards] w-full flex justify-evenly p-2">
                    <button onClick={()=>{setState("Home")}} className='rounded-full bg-poke-black p-3'><img className="w-6" src="./back.svg"></img></button>
                    <button onClick={getRandomPokemon} className='rounded-full bg-poke-black p-3 hover:animate-[spin_0.5s_infinite]'><img className="w-6" src="./refresh.svg"></img></button>
                </div>
                <button onClick={toggleActive} className='absolute w-8 left-0 right-0 mx-auto bottom-0 flex justify-center items-center'><img className='block w-6 rotate-90' src="./back.svg"></img></button>
            </div>

        )
    else
        return (
            <button onClick={toggleActive} className='absolute w-6 h-6 left-0 right-0 top-0 bottom-0 m-auto flex justify-center items-center'><img className='block w-6 rotate-[-90deg]' src="./back.svg"></img></button>
        )
}