function contar() {
    //variáveis Raizes
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var botao = document.getElementById('botao')
    var res = document.getElementById('res')
    var passo = document.getElementById('passo')

    //Repetições
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro Critico! Inssira valores validos e tente novamente')
    } else {
        res.innerHTML = 'Contando:'
        var vpasso = Number(passo.value)
        var vinicio = Number(inicio.value)
        var vfim = Number(fim.value)
        if (vinicio <= vfim) {
            //contagem crescente
            for (let c = vinicio; c <= vfim; c += vpasso) {
                res.innerHTML += `\u{1F449}${c} `

            }
        } else {
            //contagem deprimente
            for (let c = vinicio; c >= vfim;c -= vpasso) {
                res.innerHTML += `\u{1F449}${c} `
            }
        }

    }

    res.innerHTML += `\u{1F3C1}`
}