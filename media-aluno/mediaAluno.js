function mediaAluno() {

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

//declaração das "variáveis"
const nota1 = parseInt(document.getElementById("nota1").value);
const nota2 = parseInt(document.getElementById("nota2").value);
const nota3 = parseInt(document.getElementById("nota3").value);

//cálculo da média
media = (nota1 + nota2 + nota3) /3;

//console.log("A nota 1 é:", nota1);
//console.log("A nota 2 é:", nota2);
//console.log("A nota 3 é:", nota3, '\n','\n');

document.getElementById("resultado").innerHTML = "A média do aluno é: " + media + "<br>";

console.log("A média do aluno é:", media,'\n','\n');

if (media >= 7) {
    document.getElementById("resultado").innerHTML += "Aprovado";
} else if (media >= 5) {
    document.getElementById("resultado").innerHTML += "Exame";
} else {
    document.getElementById("resultado").innerHTML += "Reprovado";
}

// if (media < 5 ) {
//    console.log("Reprovado");
// }

console.log("Fim do programa");

}

