// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const sentence = 'Pig latin is cool !';

function pig(str) {
  const words = str.split(' ');
  return words.map(word => {
    if (word.length > 1) {
      return word.substr(1, word.length) + word.substr(0, 1) + 'ay';
    }
    return word;
  }).join(' ');
}
console.log(pig(sentence));
