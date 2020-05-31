//
// Input => "abbccc"
//
// Output => "{ a: 1, b: 2, c: 3}"
//

function countLetters(string) {
    let array = string.split('');
    let output = {};
    for (let i = 0; i < array.length; i++) {
        let letter = array[i];
        if (output[letter]) {
            output[letter] = output[letter] + 1;
        } else {
            output[letter] = 1;
        }
    }
    return output;
}
