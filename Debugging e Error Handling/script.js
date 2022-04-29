/*
Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

    1. Crie uma função que recebe um array e um número
    2. Realize as seguintes validações
        - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
        - Se o array não for do tipo 'object', lance um erro do tipo TypeError
        - Se o número não for do tipo 'number', lance um erro do tipo TypeError
        - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    3. Utilize a declaração try...catch
    4. Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function errorHandler(array, length) {
  try {
    if (!array && !length)
      throw new ReferenceError('ReferenceError: Informe os parâmetros.');

    if (typeof array !== 'object')
      throw new TypeError('TypeError: Envie um elemento do tipo Array.');

    if (typeof length !== 'number')
      throw new TypeError('TypeError: Envie um elemento do tipo Number.');

    if (array.length !== length)
      throw new RangeError('RangeError: O Tamanho do array é inválido.');

    return array;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log(error.message);
      console.log(error.stack);
    } else if (error instanceof TypeError) {
      console.log(error.message);
      console.log(error.stack);
    } else if (error instanceof RangeError) {
      console.log(error.message);
      console.log(error.stack);
    } else {
      comsole.log('Aconteceu um erro inesperado!');
      console.log(error.stack);
    }
  }
}

console.log(errorHandler([1, 2], 2));
console.log(errorHandler());
console.log(errorHandler(1, 2));
console.log(errorHandler([1, 2], '2'));
console.log(errorHandler([1, 2], 3));
