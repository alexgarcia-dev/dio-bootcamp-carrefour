/*
Atividade 2: Sets

Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

OBS: Além de retornar outro array, também resolvi coloca-lo em ordem crescente no resultado.
*/

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValue(array) {
  const unique = new Set(array);

  return [...unique];
}

array.sort((a, b) => a - b);

console.log(uniqueValue(array));
