function calcular() {
  let num = window.document.getElementById('txtn')
  let tab = window.document.getElementById('seltab')
  let res = window.document.getElementById('res')

  
  if (num.value.length == 0) {
    window.alert('[ERRO] - Numero invalido!')
  } else {
    let n = Number(num.value)
    let c = 1
    let soma = 0
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      soma = n * c
      item.text = `${n} x ${c} = ${soma}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}
