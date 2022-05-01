var valores = [5, 8, 10, 22, 38, 45, 60 , 90, 100, 120]

function buscaBin(num) {
    let inicio, fim; 
    let meio;
    let passos = 0;
    inicio = 0
    fim = 9
    while (inicio<=fim) {
        meio = parseInt((inicio+fim)/2)
        passos ++
        if (num== valores[meio]) {
            console.log(`Achei em ${passos} passos.`)
            return meio
        } else {
            if (num>valores[meio]) {
                inicio=meio+1
            } else {
            fim = meio -1
            }
        }
    } 
    console.log(`Não achei em ${passos} passos.`)
    return -1
}  

console.log(buscaBin(10))
console.log(buscaBin(60))
console.log(buscaBin(50))
