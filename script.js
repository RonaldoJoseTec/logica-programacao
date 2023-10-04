//aula1
//document.write("Olá, mundo");
//console.log("Imprimindo no console!");
//window.alert("Texto no modal do navegador!");
//console.log();

//aula2
//Lógica de progamação
//Problema: receber 3 notas de um aluno;
//calcular e apresentar a média e o resultado se o aluno foi aprovado ou não.
//para pular linha '\n','\n'

console.log("Início do programa",'\n','\n')

let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

nota1 = parseInt(prompt("Insira a nota 1"));
nota2 = parseInt(prompt("Insira a nota 2"));
nota3 = parseInt(prompt("Insira a nota 3"));

console.log("A nota 1 é:", nota1);
console.log("A nota 2 é:", nota2);
console.log("A nota 3 é:", nota3, '\n','\n');

//cálculo da média
media = (nota1 + nota2 + nota3) /3;

console.log("A média do aluno é:", media,'\n','\n');

console.log("Fim do programa")