// Variaveis são elementos que guardam valores que podem ser mutáveis ao seu bel prazer.
var nome = "Jean Luc Ernest";
var idade = 20;
var Masculino = true;
console.log(nome); // output = "Jean Luc Ernest"
var nome = "Jean";
console.log(nome); // output = "Jean"
// Constantes são elementos que guardam valores, como as variáveis, mas não são mutáveis.
const nome2 = "Jean Luc Ernest";
const idade2 = 20;
const Masculino2 = true;
console.log(nome2); // output = "Jean Luc Ernest"
// const nome2 = "Jean"; // Se eu declarasse novamente essa const daria erro no console porque ela já foi declarada.

// Comandos de decisão são aqueles que se sua condição for atendida ele irá fazer algo, se não, irá fazer outra coisa ou não fará nada.
if (Masculino == true) {
  console.log("Ele é um homem");
} else {
  console.log("Pertence a outro gênero");
}

if (idade > 18) {
  console.log("É um adulto");
} else {
  console.log("É menor de idade");
}

// Loops são aqueles que enquanto sua condição não se completar ele irá repetir um bloco.

for (var i =0; i <= 10; i++) {
  console.log(i);
}

while (idade < 30) {
  console.log(idade);
  idade++;
}

do {
  idade--
  console.log(idade);
} while (idade > 20)

// Funções são aqueles que quando chamadas irão realizar um determinado bloco dentro de seu escopo.

var numero = 0
function brincandoComLopp(numero) {
  
  while (numero < 30) {
    console.log(numero);
    numero++;
  }
  
  do {
    numero--;
    console.log(numero);
  } while (numero > 20)
}

brincandoComLopp(numero);

// Existem dois tipos de escopo, Global e Local, o escopo Global irá estar declarado pra todo o codigo.
// O escopo Local está apenas declarado para aquele bloco onde foi declarado;

// Exemplo de escopo Global:
var escopoGlobal = 10;

//Exemplo de escopo Local
function mostrarEscopoLocal () {
  var escopoLocal = 50;

  if (escopoLocal > escopoGlobal) {
    console.log(escopoLocal); // output = Irá mostrar o valor no console.
  }
}

mostrarEscopoLocal();

/* if (escopoLocal > escopoGlobal) {
  console.log(escopoLocal); // output = Irá reclamar que escopoLocal não está declarado.
}; */

// input é um método para receber algo.
// output é um método para mostrar algo.

// exemplo input
var numeroInput = prompt("digite um numero");

// exemplo output

console.log(numeroInput);
document.write(numeroInput);
alert(numeroInput);

// array é uma variavel que irá guardar uma lista de itens que forem colocador dentro dele.

var array1 = ['Jean', 'Vitor', 'João'];

console.log(array1);

// objeto é um grupo de itens que são propriedades específicas de alguma coisa.

var pessoa = {
  nomeCompleto: 'Jean Luc Ernest',
  sexo: "Masculino",
  gostaDeFutebol: false,
  gostaDeComputador: true
}

// camelCase, PascalCase, kibab-case, snake_case
// camelCase = Normalmente utilizado para nomear variaveis, funcoes, objetos e arrays, a primeira palavra a primeira letra em minuscula e as proximas palavras, as primeiras letras em maiuscula.
// ex: nomeCompletoDoAluno
// PascalCase = Normalmente utilizado para nomear nomes publicos, a primeira letra da primeira palavra em maiuscula e as outras primeiras letras das outras palavras tambem em maiuscula. (Eu realmente nao entendi a funcao dessa forma de escrita)
// ex: HtmlTag
// kibab-case = Normalmente ultilizado para nomear documentos com nomes compostos.
// ex: exercicio-final
// snake_case = Normalmente ultilizado para nomear nomes compostos de variaveis.
// ex: nome_completo_do_aluno

// Caminho absoluto é aquele caminho exato para um arquivo. 
// Ex: C:\Users\JeanL\Desktop\SERRA TEC\Aulas\Repositórios\projeto-final-nivelamento\projeto-final/exercicio.html
// Caminho relativo é aquele caminho que por uma referencia atras do arquivo que está sendo declarado.
// Ex: ./projeto-final/exercicio.html

// O operador && irá verificar se as duas declarações são true;
// O operador || irá verificar se uma ou a outra declaração é true;
// O operador == irá verificar se a declaração tem o mesmo valor que a comparação, retornando true se for igual;
// O operador != irá verificar se a declaração é diferente do valor da comparação, retornando true se for diferente;

// EPER = Entender, Planejar, Executar, Revisar
// É uma forma de organização para qualquer coisa que for fazer, passando por cada etapa do EPER você estará seguindo uma linha de raciocinio limpa e correta para chegar ao resultado desejado.

// Pilha = O que está em ultimo é o primeiro a sair. Como em uma pilha de livros.
// Fila = O que está em primeiro é o ultimo a sair. Como em uma fila de banco.

// Irei utilizar a comparação ao corpo humano para explicar a diferença entre html, JS e CSS.
// html é a mesma coisa que a estrutura ossea do nosso corpo, é o esquelo do projeto.
// CSS é a mesma coisa que a estrutura carnal, pele, cabelo, cor, formato do nosso corpo, é o que faz a aparencia dele.
// JavaScript é a mesma coisa que a estrutura neural e muscular do nosso corpo, é o que da a vida, nos faz olhar, mexer.


