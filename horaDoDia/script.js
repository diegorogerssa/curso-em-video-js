
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var mensagem = document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'images/fotomanha.png'
        document.body.style.background = 'green'
        mensagem.innerHTML='Bom dia'
    }else if (hora <= 18){
        //boa tarde
        img.src='images/fototarde.png'
        document.body.style.background = '#b3a42067'
        mensagem.innerHTML='Boa tarde'
    }else{
        //boa noite
        img.src='images/fotonoite.png'
        document.body.style.background = 'gray'
        mensagem.innerHTML='Boa noite'
    }
}