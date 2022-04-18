let amigo= {nome:'joao',
 sexo:'M', 
 peso:'78.6', 
 engordar(p=0){
     console.log('Engordou')
     this.peso += p
 }}


amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)