function tune(arr) {
    const frequencies = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    const results = {
        " - ": (x, y) => x === 0,
        "OK": (x, y) => x === y,
        "•<": (x, y) => 1 < x / y && x / y < 1.03,
        "•<<": (x, y) => x / y >= 1.03,
        ">•": (x, y) => 1 < y / x && y / x < 1.03,
        ">>•": (x, y) => y / x >= 1.03
    };

    let newArr = [];
    for (let i = 0; i < frequencies.length; ++i) {
        Object.keys(results).some(key => {
            if (results[key](arr[i], frequencies[i])) {
                newArr.push(key);
                return true;
            }
        });
    }

    return newArr;
}

console.log(tune([0, 246.94, 0, 0, 0, 78]));// ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]

console.log(tune([329.63, 246.94, 195, 146, 111, 82.41]));// ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]

console.log(tune([329.63, 246.94, 196.00, 146.83, 110.00, 82.41]));// ➞ ["OK", "OK", "OK", "OK", "OK", "OK"]
