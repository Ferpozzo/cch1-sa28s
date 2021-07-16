const cesar = require('../cesar/cesar');

function decifraFrequencia(string) {
    let frequencia = {};
    for (let i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
            let character = string[i];
            if (frequencia[character]) {
                frequencia[character]++;
            } else {
                frequencia[character] = 1;
            }
        }
    }

    const sortable = Object.entries(frequencia).sort(([, a], [, b]) => b - a);/* 
    console.log(sortable); */
    let newString = "";

    let char1 = sortable[0][0];
    let char2 = sortable[1][0];

    let key = 1 + (char1.charCodeAt(0) - char2.charCodeAt(0));
    if (key < 0) {
        key = 1 + (char2.charCodeAt(0) - char1.charCodeAt(0));
    }
    console.log("Chave: " + key);

    newString = cesar.cesar(string, key, 'd');
    /* 
        newString += `\nChave: ${key}`;
        console.log(newString); */
    return newString;
}

module.exports = {
    decifraFrequencia,
}