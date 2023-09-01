alert('Welcome !!')

//Objetos são dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves {}.
// As propriedades de objetos podem ser atribuídas á variáveis, facilitando a manipulação do objeto. Chamado de desestruturação.

let object = { string: 'string', Number: 1, Boolean: true, Array: ["array"] };
console.log(object);

//Procurar por determinada informação que esta dentro do objeto -> object
//Desestruturação
var string = object.string;
console.log(string);

var array = object.array;
console.log(array);

//Outra forma de se fazer a destruturação 
var {string, Boolean, array} = object;
console.log(string, Boolean, array);