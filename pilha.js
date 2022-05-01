var elementos = [];
var topo = -1 //todo vetor inicia no 0, e utilizando o topo -1 estamos fora da array. 
const MAX = 10

function push(num){
    if (topo < MAX) {
        topo++
        elementos[topo]=num
    } else {
        console.log('Pilha está cheia!')
    }
}

function pop () {
    if (topo != -1) {
        let num = elementos[topo]
        topo --
        return num
    }else {
        console.log('pilha está varia')
    }
}



// ------ parte do código que usa a pilha -- //

var numDecimal = 10
var resto

    while (numDecimal !=0) {
        resto = parseInt(numDecimal %2)
        push(resto)
        numDecimal = parseInt(numDecimal / 2)
    }

    while (!estaVazia()) {
        console.log(pop())
    }
