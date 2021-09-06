// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const sentence = 'Pig latin is cool ! !';

function pig(str) {
const words = str.split(' ');
  return words.map(word => {
    if (word.length === 1 && !word.match(/[a-z]/i)) {
      return word;
    }
    
  return word.substr(1, word.length) + word.substr(0, 1) + 'ay';

  }).join(' ');
}
console.log(pig(sentence));
