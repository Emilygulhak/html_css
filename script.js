
//como declarar um array
let array = ['string', 1, true];
console.log(array);

let array2 = ['string', 1, true, [array]];
console.log(array2);

//Para selecionar somente um valor do array
let array3 = ['string', 1, true, [array], [array2]]
console.log(array3[0]);
console.log(array3[1]);
console.log(array3[2]);
console.log(array3[3]);
console.log(array3[4]);

//Ao ser declarado o array traz consigo uma série de métodos para manipulá-lo.

//forEach()- itera um array
array.forEach(function(item, index){console.log(item, index)});

//push() - add item no final do array
array.push('novo item');
console.log(array);

//pop() - remove item no final do array
array.pop();
console.log(array);

//shift() - remove item no início do array
array.shift();
console.log(array);

//unshift() - add item no início do array
array.unshift('novo item');
console.log(array); 

//indexOf() - retorna o índice de um valor 
console.log(array.indexOf('string'));

//splice() - remove ou substitui um item pelo índice
array.splice(0, 3);
console.log(array);

//slice() - retorna uma parte de um array existente
let novoArray = array.slice(0, 3);
