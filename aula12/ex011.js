console.log(`voce tem ${idade}.`)
var idade = 70

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65) {
    console.log('O voto é opcional')
}
else {
    console.log('O voto é obrigatorio')
}

