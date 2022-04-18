let num = [4, 8, 7, 3, 1]
num.push(5)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length}`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
  console.log('Valor não encontrado')
} else {
  console.log(`O valor 9 esta na posição ${pos}`)
}
