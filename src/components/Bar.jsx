

export default function Bar({value}) {
    const full = 255;
    const valuePercentage = Math.round(value/full*100);
    const green = full - value;
    const red = value;
  return (
    <div className="bg-poke-gray rounded-full h-6 flex pl-1 items-center flex-1">
        <div style={{width: `${valuePercentage}%`, background: `rgb(${red}, ${green}, 0)`}} className="h-4 rounded-full">
        </div>
    </div>

  )
}