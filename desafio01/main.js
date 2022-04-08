var agora = new Date()
var horadia = agora.getHours()
var hora = window.document.getElementById('horario')
var fundo = window.document.querySelector('body')
var img = window.document.getElementById('imagem')

hora.innerHTML = `Agora são ${horadia} horas.`

if (horadia >= 6 && horadia < 12) {
  fundo.style.backgroundColor = 'rgb(160, 140, 73)' 
  img.src = 'img/morning.jpg'
} else if (horadia >= 12 && horadia < 18) {
  fundo.style.backgroundColor = 'rgb(175, 175, 85)'
  img.src = 'img/afternoon.jpg'
} else if (horadia >= 18 && horadia < 23) {
  fundo.style.backgroundColor = 'rgb(68, 68, 66)'
  img.src = 'img/nigth.jpg'
}