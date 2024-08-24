import { useState, useEffect } from 'react'

function Loading({active, trigger}) {
  const [currAnimation, setCurrAnimation] = useState("animate-[pop-in_0.5s_forwards]");
  function start() {
    setCurrAnimation("animate-[pop-in_0.5s_forwards]");
    setTimeout(() => {
      setCurrAnimation("animate-[rotate_0.5s_linear_infinite]");
    }, 500);
  }

  useEffect(()=>{
    start();
  },[])

  useEffect(()=>{
    if (!active && trigger) {
      setCurrAnimation("animate-[pop-out_0.5s_forwards]");
      setTimeout(() => {
        trigger();
      }, 500);
    } else if (active) {
      start();
    }
  },[active])

  return (
    <div className={`${currAnimation}`}>
      <img src="./logo.svg"/>
    </div>
  )
}

export default Loading
