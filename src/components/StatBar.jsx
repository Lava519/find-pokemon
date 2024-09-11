import Bar from "./Bar"
export default function StatBar({title, value}) {
    return (
        <div>
            <div className="flex min-w-64 justify-space-between"><p className="w-44">{title.toUpperCase()}:</p> <p className="w-8 text-right mr-2">{value}</p> <Bar value={value}></Bar></div>
        </div>
    )
}