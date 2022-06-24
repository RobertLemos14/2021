var numero = parseInt(prompt("Digite um numero"))



if(numero > 0 || numero > 1 || numero){

    document.write("essa é sequencia: 0,1")

    for(let i = 1; i < numero; i += i){
    document.write(i + ",")    
}
}else{
    alert("Numero invalido recarregue a pagina")
}