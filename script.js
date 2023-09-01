/*
  - [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let number1 = Number(prompt('Digite o primeiro número: '))
let number2 = Number(prompt('Digite o segundo número: '))

const sum = number1 + number2
const sub = number1 - number2
const mult = number1 * number2
const div = number1 / number2
const rest = number1 % number2

alert(' A soma dos dois números é: ' + sum)
alert(' A subtração dos dois números é: ' + sub)
alert(' A multiplicação dos dois números é: ' + mult)
alert(' A divisão dos dois números é: ' + div)

const par = sum % 2
if (par == 0) {
  alert('A soma dos dois é par')
} else {
  alert('A soma dos dois é impar')
}

if (number1 == number2) {
  alert('Os numeros são iguais')
} else {
  alert('Os numeros são diferentes')
}
