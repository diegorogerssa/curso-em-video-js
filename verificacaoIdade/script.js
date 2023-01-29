function verificar(){
    var dataatual = new Date()
    var data = dataatual.getFullYear()
    var tano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (tano.value.length < 4 || tano.value > data){
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('src','error.png')
        res.innerHTML = '[ERRO] Verifique os dados e tente novamente'
        res.appendChild(img)
    }else{
        var sexo = document.getElementsByName('radsex')
        var idade = data - Number(tano.value)
        var gereno = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            genero='Homem'
            //Masculino
            if (idade <= 10){
                //res.innerHTML =`Detectamos uma Criança de ${idade} anos`
                img.setAttribute('src','image/homemcrianca.png')
            }else if(idade <=21){
                //jovem
               // res.innerHTML =`Detectamos um Jovem de ${idade} anos`
                img.setAttribute('src','image/homemjovem.png')
            }else if (idade < 50){
                //adulto
                //res.innerHTML =`Detectamos um Adulto de ${idade} anos`
                img.setAttribute('src','image/homemadulto.png')
            }else {
                //idoso
               // res.innerHTML =`Detectamos um Idoso de ${idade} anos`
                img.setAttribute('src','image/homemvelho.png')
            }
        }else if(sexo[1].checked){
            //feminino
            genero='Mulher'
            if (idade <=10){
                //criança
                res.innerHTML =`Detectamos uma Criança de ${idade} anos`
                img.setAttribute('src','image/mulhercrianca.png')
            }else if(idade<=21){
                //jovem
                //res.innerHTML =`Detectamos uma Jovem de ${idade} anos`
                img.setAttribute('src','image/mulherjovem.png')
            }else if(idade<50){
                //adulto
                //res.innerHTML =`Detectamos uma Adulta de ${idade} anos`
                img.setAttribute('src','image/mulheradulta.png')
            }else{
                //idosa
                //res.innerHTML =`Detectamos uma Idosa de ${idade} anos`
                img.setAttribute('src','image/mulhervelha.png')
            }
        }
        res.innerHTML=`Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}