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

export function stateChange(animation, animationName, state, stateName, time) {
    if (animation) {
        animation(`animate-[${animationName}_${time/1000}s_forwards]`);
        setTimeout(() => {
          state(stateName);
        }, time);
        return null;
    }
    setTimeout(() => {
        state(stateName);
      }, time);
    return `animate-[${animationName}_${time/1000}s_forwards]`;
}

export function changeAnimation(animation, currAnimation, prevAnimation, time) {
    animation(`animate-[${currAnimation}_${time/1000}s_forwards]`);
    setTimeout(() => {
      state(stateName);
    }, time);
}