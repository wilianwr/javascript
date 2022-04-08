btn.addEventListener('click', clique)

function clique() {
  var na = window.document.getElementById('name')
  var n = String(na.value)
  maisculo.innerText = `Seu nome maisculo fica ${n.toUpperCase()}`
  minusculo.innerText = `Seu nome minusculo fica ${n.toLowerCase()}`
  contagem.innerText = `${n} Seu nome tem ${n.length} letras`
}


/*=================Definir nome====================== */


let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1')

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome)
    meuCabecalho.textContent = 'Mozzila é legal, ' + meuNome;
  }
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Mozzila é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() {defineNomeUsuario();
}


/*================== Nome jogador================= */

const para = document.getElementById('jogador')

para.addEventListener('click', definirNomeJogador)

function definirNomeJogador() {
  var nome = prompt('Jogador: ')
  para.innerText = `Jogaor 1: ${nome}`
  if (!nome || nome === null) {
    definirNomeJogador();
  }
} 