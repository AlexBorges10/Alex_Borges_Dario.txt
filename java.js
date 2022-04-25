// 1 - Muitas estruturas algorítmicas tem sua lógica inspirada em coisas do seu cotidiano, como por exemplo o ato de tomar água e depois ter que ir ao banheiro. Baseado nos seus conhecimentos de estruturas algorítmicas e na sua vivência pessoal, descreva uma situação cotidiana que se assemelha a essas respectivas estruturas abaixo:

// a - Array
//


 Feira: Vou a feira, em seguida eu compro 2 morangos , 3 mangas e 4 tomates, pago os alimentos e volto para casa. 
 

 //

// b - Função
//


Jogos : Iniciei um jogo, nesse jogo eu criei um personagem e coloquei o nome dele de Alex Borges.


//

// c - Laço de repetição (for)
//


Refrigerante no copo: Com uma garrafa de refrigente, eu coloco 1 dose em 3 copos,em seguida eu fecho a garrafa.

//



// d - Laço de repetição (while)
//


Refrigerante no copo: Com uma garrafa de refrigente, eu coloco 1 dose em 4 copos,em seguida eu fecho a garrafa.


//



// e - Condicionais (if e else)

//
 Jogar Futebol: Estou cara a cara com goleiro, eu chuto a bola na direçao do gol pois se eu nao chutar acaba o jogo.  //


// 2 - Agora, com base nas suas respostas a cima, repita essa mesma situação que você descreveu, porém transformando-as em código JavaScript.

// a - Array
const feira={
    "morangos": 2,
    mangas: 3 ,
    tomates: 4
  };
console.log(feira["morangos"]); 

//


// b - Função

//
function nomeDoPersonagem(nome,sobrenome){
    return nome + sobrenome
    
}
const pessoa = nomeDoPersonagem('Nome do Personagem: '+'Alex ', 'Borges')
console.log(pessoa)
 //


 // c - Laço de repetição (for)
//
let refrigerante = 1;
          
      for (let copo = 0; copo < 4; copo += refrigerante){
          console.log('Colocando no copo. copo '+ copo + '/5');
      }
      console.log('Fechando garrafa.') //




// d - Laço de repetição (while)


//
let garrafa = 0;
let copo = 1;
      
  while (garrafa < 5){
      garrafa += copo;
      console.log('Colocando no copo. garrafa: ' + garrafa + '/5');
  }
  console.log('Fechando garrafa.'); //




// e - Condicionais (if e else)
//  

const fazerGol=(chute)=>{
    if (chute === true) {
        console.log('faço o gol');
    } else {
        console.log('não faço o gol');
    }
}
fazerGol(true);  //


Alex_Borges_Dario.txt


