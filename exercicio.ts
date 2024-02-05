function multiplicar(num1: number, num2: number): number {
    return num1 * num2;
}

function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const resultadoMultiplicacao = multiplicar(5, 10); 
const mensagemSaudacao = saudacao("Silvia"); 

console.log(resultadoMultiplicacao)
console.log(mensagemSaudacao)