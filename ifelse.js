    <script>
//Estruturas Condicionais 
//São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição.

//if (se)
//Palavra reservada if para estabelecer uma condição.
 var jogador1 = 1;
 var jogador2 = 0;

 if(jogador1 > 0){
    console.log('Jogador1 marcou ponto!');
 }

//else 
//no caso de a condição não ser atendida podemos usar o else

var jogador1 = 1;
 var jogador2 = 0;

 if(jogador1 > 0){
    console.log('Jogador1 marcou ponto!');
 }else{
    console.log('ninguem marcou ponto!');
 }

 //else if 
 //caso haja mais de uma condição usamos o else if
 var jogador1 = 1;
 var jogador2 = 0;

 if(jogador1 > 0){
    console.log('Jogador1 marcou ponto!');
 }else if (jogador2 > 0){
    console.log('jogador2 marcou ponto!');
 }else{
    console.log('ninguem marcou ponto!');
 }


 //ninho de if 
 //podemos também usar o if dentro de um outro if
 // != -> significa diferente
 if (jogador1 != -1){
    if(jogador1 > 0){
        console.log('Jogador1 marcou ponto!');
    }else{
        console.log('ninguem marcou ponto!');
    }
 }else{
    console.log('jogador inválido!');
 }


 //if ternário
 //podemos também fazer uma verificação em uma única linha usando o if ternário.
//[condição] ? [instrução1] : [instrução2];

if(jogador1 > 0 ? console.log('marcou ponto'):console.log('não marcou ponto'));
    </script>







</body>
</html>
