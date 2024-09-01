import Bar from "./Bar"
export default function StatBar({title, value}) {
    return (
        <div>
            <div className="flex min-w-64"><p className="w-48">{title.toUpperCase()}: {value}</p> <Bar value={value}></Bar></div>
        </div>
    )
}