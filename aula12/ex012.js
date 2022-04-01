var agora = new Date()
var hora = agora.getHours()
//A linha acima demonstra como pegar a hora do sistema.
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 6 && hora <= 11){
    console.log('Eu te desejo um otimo dia.')
}else if(hora >=12 && hora <= 17){
    console.log('Tenha uma exelente tarde meu nobre')
}else if(hora >= 18 && hora <= 23.59){
    console.log('Tenha uma exelentissima noite meu caro.')
} else( console.log('Bons estudos nessa madrugada cara SZ'))