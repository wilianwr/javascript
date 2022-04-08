var idade = 12
var voto = 55


console.log(`Você tem ${idade}`)
if (idade < 16) {
  console.log(`Não vota`)
} else if (idade < 18 || idade >= 67) {
  console.log(`Voto opcional`)
} else {
  console.log(`Voto Obrigatorio`)
}

console.log(`Você escolheu votar no n°${voto}`)
if (voto == 34) {
   console.log(`Você votou no Lula nº34`)
} else if (voto == 55) {
  console.log(`Você votou no Bolsonario n°55`)
} else if (voto == 72) {
  console.log(`Você votou na Dilma nº72`)
}

