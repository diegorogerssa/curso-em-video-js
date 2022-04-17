function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora< 12){
        img.src ="imagens/fotomanha.png"
        document.body.style.background = '#F7D04F'
    }else if (hora < 18){
        img.src = "imagens/fototarde.png"
        document.body.style.background = '#F89D0C'
    }else{
        img.src = "imagens/fotonoite.png"
        document.body.style.background = '#5316F8'
    }
}