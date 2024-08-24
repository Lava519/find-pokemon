import { useState } from 'react'

function Pokemon({state}) {
  const [currAnimation, setCurrAnimation] = useState("animate-[pop-in_0.5s_forwards]")
  function handleSubmit(e){
    e.preventDefault();
    setCurrAnimation("animate-[pop-out_0.5s_forwards]");
    setTimeout(() => {
      state("Pokemon");
    }, 500);
  }
  return (
    <div>
        <h1>Pokemon</h1>
    </div>
  )
}

export default Pokemon
