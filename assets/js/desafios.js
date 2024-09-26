// const color = document.querySelector("#color");

// color.addEventListener("input", () => {
//   let body = document.querySelector("body");
//   body.style.background = color.value;
// });

/* 
DESAFIO DE IMPOSTO SOBRE SALÁRIO

Faça um programa que calcule e imprima o valor de salario a ser pago a um funcionário. 

Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios.

O salário a ser transferido é calculado da seguinte maneira:

(valor bruto do salário  - percentual de imposto mediante salário + adicional de benefícios)

As aliquotas de imposto são:

De R$ 0,00 a R$ 1100,00 = 5%
De R$ 1100,00 a R$ 2500,00 = 10%
Maior que R$ 2500,00 = 15%
*/

let salarioLiquido, imposto;

function calcularSalario(salario, valorBeneficio) {
  if (salario <= 0) {
    return console.log("O salário deve ser maior que R$ 0");
  } else {
    if (salario > 0 && salario <= 1100) {
      imposto = 0.05;
    } else if (salario > 1100 && salario <= 2500) {
      imposto = 0.1;
    } else {
      imposto = 0.15;
    }
    salario = salario - salario * imposto;
    salarioLiquido = salario + valorBeneficio;
    return console.log(salarioLiquido.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
  }
}

calcularSalario(1000, 250);
