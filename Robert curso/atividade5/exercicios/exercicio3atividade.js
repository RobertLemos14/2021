var valorfabrica = parseInt(prompt("Digite o valor do carro de fabrica"))

var imposto = valorfabrica * 0.45

var distribuidor = valorfabrica * 0.12

var precoDoconsumidor = valorfabrica * (distribuidor + imposto)

document.write("Esse é o preço do consumidor: " + precoDoconsumidor)