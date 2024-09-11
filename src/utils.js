export function Initialize(string) {
    let out = '';
    let word = true;
    for (let i = 0; i < string.length; ++i) {
        if (string[i].match(/[a-z]/i)){
            if (word) {
                out = out.concat(string[i].toUpperCase())
                word = false;
            } else
            out = out.concat(string[i])
        } else {
            out = out.concat(string[i]);
            word = true;
        }
    }
    return out;
}

export function Height(string) {
    return Number(string)/10+"m"
}

export function Weight(string) {
    return Number(string)/10+"kg"
}