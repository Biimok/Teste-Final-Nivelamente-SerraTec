// Irei optar por fazer esse sistema em puro JavaScript por prática do mesmo.

// Receber os 5 numeros
var num1 = prompt("Digite o 1º numero")
var num2 = prompt("Digite o 2º numero")
var num3 = prompt("Digite o 3º numero")
var num4 = prompt("Digite o 4º numero")
var num5 = prompt("Digite o 5º numero")
var arrayNumeros = [num1, num2, num3, num4, num5];

// Retornar o menor e maior numero

function retornarMenorEMaior(num1,num2,num3,num4,num5) {
  maiorNumero = Math.max(num1,num2,num3,num4,num5);
  menorNumero = Math.min(num1,num2,num3,num4,num5);

  document.write(`Este é o maior número: ${maiorNumero}`)
  document.write(`</br>Este é o menor número: ${menorNumero}`)
}

retornarMenorEMaior(num1,num2,num3,num4,num5);

// Retorna se é par ou impar
function retornarParOuImpar(arrayNumeros) {
  for (value of arrayNumeros) {
    if (value%2 == 0) {
      document.write(`</br>${value} é par!`)
    } else {
      document.write(`</br>${value} é impar!`)
    }
  }
}

retornarParOuImpar(arrayNumeros);


// Retonar qual o numero repetido e quantas vezes repetiu

function verificarNumero(arrayNumeros) {
  for (value of arrayNumeros) {
    var verifRepetido = arrayNumeros.filter(a => a == value);
    var numeroRepetido
    if (verifRepetido.length > 1 && verifRepetido[0] != numeroRepetido) {
      document.write(`</br>${value} se repete ${verifRepetido.length} vezes.`);
      numeroRepetido = verifRepetido[0];
    }
  }
}

verificarNumero(arrayNumeros);
