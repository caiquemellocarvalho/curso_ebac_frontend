"use strict";

// Criação do array de objetos dos alunos
var alunos = [{
  nome: "Paula",
  nota: 8
}, {
  nome: "Roberta",
  nota: 5
}, {
  nome: "Caio",
  nota: 6
}, {
  nome: "Daniela",
  nota: 7
}, {
  nome: "Eduardo",
  nota: 4
}, {
  nome: "Fernanda",
  nota: 9
}, {
  nome: "Gustavo",
  nota: 3
}, {
  nome: "Aurora",
  nota: 10
}];

// Função para retornar alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamada da função e exibição dos alunos aprovados
var alunos_aprovados = alunosAprovados(alunos);
console.log(alunos_aprovados);