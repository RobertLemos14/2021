var nome = prompt("Escreva seu nome")
var salario = 500
var numeroDecarros = parseInt(prompt("Digite o numero de carros vendidos"))
var vendas = parseInt(prompt("Digite o dinheiro ganho com as vendas"))

var comissão = numeroDecarros * 50

var porcentagemdevendas = vendas * 0.05

var salariototal = salario + porcentagemdevendas + comissão

document.write(nome + "<br>" + "<br>" + salariototal)