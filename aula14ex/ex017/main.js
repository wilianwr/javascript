function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.getElementById('detectamos')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''

    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')

    img.style.borderRadius = '50%'
    img.style.width = '80%'
    img.style.height = '80%'
    img.style.maxWidth = '300px'

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'img/crianca-menino.jpg')
      } else if (idade >= 10 && idade < 15) {
        //Adolecente
        img.setAttribute('src', 'img/adocelecente-menino.jpg')
      } else if (idade >= 15 && idade < 18) {
        //joven
        img.setAttribute('src', 'imf/joven-menino.jpg')
      } else if (idade >= 18 && idade < 50) {
        //Adulto
        img.setAttribute('src', 'img/adulto-homem.jpg')
      } else if (idade >= 50 && idade < 120) {
        //Idoso
        img.setAttribute('src', 'img/idoso-homem.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'img/crianca-menina.jpg')
      } else if (idade < 15) {
        //Adolecente
        img.setAttribute('src', 'img/adocelecente-menina.jpg')
      } else if (idade < 18) {
        //Joven
        img.setAttribute('src', 'img/joven-mulher.jpg')
      } else if (idade < 50) {
        //Aduto
        img.setAttribute('src', 'img/adulto-mulher.jpg')
      } else if (idade < 120) {
        //Idoso
        img.setAttribute('src', 'img/idoso-mulher.jpg')
      }
    }
    res.style.alignItems = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
