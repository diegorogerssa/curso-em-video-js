function verificar(){
var datual = new Date()
var data = datual.getFullYear()
var fano = window.document.getElementById ('txtano')
var res = window.document.querySelector('div#res')
 
   if(fano.value.length == 0 || Number(fano.value) > data){
     alert('[ERRO] Verifique os dados e tente novamente!');
   }else{
     var fsex = window.document.getElementsByName ('radsex')
     var idade = data - Number(fano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex[0].checked){
        genero = 'homem'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'homemcrianca.png')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'homemjovem.png')
        }else if (idade <50){
            //adulto
            img.setAttribute('src', 'homemadulto.png')
        }else{
            //coroa
            img.setAttribute('src', 'homemvelho.png')
        }
     }else if (fsex[1].checked){
        genero = 'mulher'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'mulhercrianca.png')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'mulherjovem.png')
        }else if (idade <50){
            //adulto
            img.setAttribute('src', 'mulheradulta.png')
        }else{
            //coroa
            img.setAttribute('src', 'mulhervelha.png')
        }
     }
     img.style.marginTop = '10px'
     res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
   }
}