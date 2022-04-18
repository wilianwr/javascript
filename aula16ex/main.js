var num = document.querySelector('#txtn')
var tab = window.document.getElementById('select')
var res = window.document.querySelector('.res')
let valores = []

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `O valor ${num.value} foi adicionado.`
    tab.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Valor invalido ou ja se encontra na lista!')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione um numero!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores) {
      soma += valores[pos]
    
      if (valores[pos] > maior) 
         maior = valores[pos]

      if (valores[pos] < menor)
         menor = valores[pos]
    }

    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados. </p>`
    res.innerHTML += `<p> O maior numero foi ${maior}</p>`
    res.innerHTML += `<p> O maior numero foi ${menor}</p>`
    res.innerHTML += `<p> A soma do numeros é ${soma}</p>`
    res.innerHTML += `<p> A media dos numeros é ${media}</p>`
  }
}
