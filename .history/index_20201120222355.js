// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const sentence = 'Pig latin is cool';

function pig(str) {
  const words = str.split(' ');
  return words.map(word => {
    if (word.length > 1) {
      return word.shift();
    }
    return word;
  }).join(' ');
}
console.log(pig(sentence));
