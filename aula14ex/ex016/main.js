function verificar() {
  var inicio = window.document.getElementById('inicio')
  var fim = window.document.querySelector('input#fim')
  var passo = window.document.querySelector('input#passo')
  var verificar = window.document.querySelector('div#verificar')
  

  for (var inicio = inicio; inicio <= fim; inicio = inicio + passo) {
    verificar.innerHTML = `${inicio}`
  }
}

