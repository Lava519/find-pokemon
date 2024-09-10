import { Initialize } from "../utils"

export default function Types({types}) {
    let color;
    function typeColor(type) {
        switch (type) {
            case 'normal':
                color = 'rgb(77, 83, 86)';
                break;
            case 'fire':
                color = 'rgb(184, 28, 0)';
                break;
            case 'water':
                color = 'rgb(0, 87, 173)';
                break;
            case 'electric':
                color = 'rgb(130, 98, 0)';
                break;
            case 'grass':
                color = 'rgb(88, 141, 42)';
                break;
            case 'ice':
                color = 'rgb(0, 95, 143)';
                break;
            case 'fighting':
                color = 'rgb(150, 68, 54)';
                break;
            case 'poison':
                color = 'rgb(136, 68, 122)';
                break;
            case 'ground':
                color = 'rgb(108, 87, 22)';
                break;
            case 'flying':
                color = 'rgb(0, 17, 122)';
                break;
            case 'psychic':
                color = 'rgb(153, 0, 61)';
                break;
            case 'bug':
                color = 'rgb(136, 150, 27)';
                break;
            case 'rock':
                color = 'rgb(95, 85, 42)';
                break;
            case 'ghost':
                color = 'rgb(56, 56, 127)';
                break;
            case 'dragon':
                color = 'rgb(31, 15, 138)';
                break;
            case 'dark':
                color = 'rgb(95, 68, 54)';
                break;
            case 'steel':
                color = 'rgb(67, 73, 76)';
                break;       
            case 'fairy':
                color = 'rgb(105, 17, 105)';
                break;     
            default:
                color = 'rgb(77, 83, 86)';
                break;
        }
        return color;
    }

    return ( 
    <span className="inline-flex gap-x-2">
        {types.map((type) => {
            return (
                <span className="px-2 rounded-sm" style={{"backgroundColor": typeColor(type.type.name)}} key={type.slot}>{Initialize(type.type.name)}</span>
            )
        })}
    </span>)
}