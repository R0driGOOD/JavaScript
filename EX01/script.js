function carregar() {
    var msg = window.document.querySelector('div#msg')
    let foto = window.document.querySelector('div>img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora <= 5) {
        //Boa madruga
        foto.src = 'img/madruga500.jpg'
        document.body.style.background = '#163643'
    } else if (hora >= 6 && hora <= 11) {
        //Bom dia
        foto.src = 'img/manha500.jpg'
        document.body.style.background = '#6187EB'
    } else if (hora >= 12 && hora <= 17) {
        //Boa Tarde
        foto.src = 'img/tarde500.jpg'
        document.body.style.background = '#F97201'
    } else if (hora >= 18 && hora <= 24) {
        //Boa noite
        foto.src = 'img/noite500.jpg'
        document.body.style.background = '#112027'
    } else {
        window.alert('Algo de errado não esta certo!')
    }
}