alert('Welcome !!')

/* Os 3 tipos para criação de uma variável */

var variavel  = 'diana';
variavel = 'martine';
console.log(variavel);

let variavel2 = 'diana';
variavel = 'martine';
console.log(variavel2);

const constante = 'diana';
console.log(constante);

/* Escopo Global */
var escopoGlobal = 'Global';
console.log(escopoGlobal);

/* Escopo Local */
function escopoGlobal(){
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

// Igualdade - O sinal de igualdade  = em Javascript, significa atribuição. 
var atribuicao = "Emily";

// Comparação - O sinal de  == para fazer a comparação. 
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação Identica - Ela não compara só o valor mas também o tipo  usamos  ===. 
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// Operadores Aritméticos
//Adição
var adicao = 1 + 1;
console.log(adicao);

//subtração 
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação 
var multiplicação = 2 * 3;
console.log(multiplicação);

//divisão 
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//Resto da divisão
var resto = 5 % 2;
console.log(resto);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// Operadores relacionais - São tipos de operadores que consultam a relação entre valores. 

// > maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// < menor que 
var menorQue = 5 < 2;
console.log(menorQue);

// >= maior ou igual a 
var maiorIgual = 5 >= 2;
console.log(maiorIgual);

// <= menor ou igual a 
var menorIgual = 5 <= 2;
console.log(menorIgual);

// Operadores lógicos  - são tipos de operadores que consultam valores lógicos 

//&& "e" - considera que todos os valores sejam true; 
var e = true && false;
console.log(e);

// || "Ou" - considera que qualquer valor seja true;
var f = true || false;
console.log(f);

// ! "Não" - inverte o valor de true para false ou vice-versa;
var g = !true;
console.log(g);
