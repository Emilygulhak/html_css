
    <script>
//Laços de repetição
//São estruturas condicionais que repetem uma instrução até atingir determinada condição
//funciona como uma repetição de instrução até que a condição seja falsa

//for ([expressãoInicial]; [condição]; [incremento]){
//declaração
//}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = { propriedade1 : 'valor1', propriedade2: 'valor2', propriedade3: 'valor2',}

for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

//while
//executa uma instrução enquanto determinada condição for verdadeira, a verificação é feita antes da execução 

var a = 0;
while (a<10){
    a++;
    console.log(a);
}

//dowhile
//executa uma instrução até que determinada condição seja falsa, a verificação é feita depois da execução;

var b = 0;
do{
    b++;
    console.log(b);
}while (b<10)


    </script>







</body>
</html>
