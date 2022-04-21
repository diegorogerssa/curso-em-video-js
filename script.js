function calcular(){
    var ano = new Date()
    var datual = ano.getFullYear()
    var fano = window.document.getElementById('formdatan')
    var res = window.document.getElementById('ress')
    var idade = datual - (fano.value)
       

    if (fano.value == 0 || fano.value > datual || idade > 131){
        res.innerHTML = "[ERRO] verifique os dados e tente novamente"
    }
     else {
        var fsex = window.document.getElementsByName('radsex')
        
        var foto = document.createElement ('img')
        foto.setAttribute('id', 'foto')
    }
    if (fsex[0].checked){
            var genero = 'homem'
        if (idade < 10){
           //'hCriança'
           foto.setAttribute ('src', 'homemcrianca.png')
        }
        else if (idade < 20){
            //'hjovem'
            foto.setAttribute('src','homemjovem.png' )
        }
        else if (idade < 50){
            //'hAdulto'
            foto.setAttribute('src', 'homemadulto.png')
        }
        else{
            //'hCoroa'
            foto.setAttribute('src','homemvelho.png')
        }
    }
    else if (fsex[1].checked){
         genero = 'mulher'
        if (idade < 10){
            //'mCriança'
            foto.setAttribute('src', 'mulhercrianca.png')
        }
        else if (idade < 20){
            //'mjovem'
            foto.setAttribute('src', 'mulherjovem.png')
        }
        else if (idade < 50){
            //'mAdulto'
            foto.setAttribute('src','mulheradulta.png')
        }
        else{
            //'mCoroa'
            foto.setAttribute('src','mulhervelha.png')
        }
        }
        
        res.innerHTML = `<br>Foi identificado <strong>${genero}</strong> de ${idade} anos`
        res.appendChild(foto)
        res.style.textAlign= 'center'
        foto.style.padding = '10px'
        
        
}