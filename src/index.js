const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let count = expr.length / 10;
    let result = '';

    for(let j = 0; j < count; j++) {
        let letter = '';
        let numDec = expr.slice((j * 10), (j * 10 + 10));
        
        if(numDec == '**********') {
            result += ' ';
        } else {
            for(let i = 0; i < 9; i += 2) {
                if(numDec[i] + numDec[i+1] == 10) {
                    letter += '.';
                } else if (numDec[i] + numDec[i+1] == 11) {
                    letter += '-';
                } 
        }
        result += MORSE_TABLE[letter];
        }
    }
    return result;
}

module.exports = {
    decode
}