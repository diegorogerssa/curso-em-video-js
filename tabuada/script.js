function tabuada(){
    var tabu = window.document.getElementById('tab')
    var txtarea = window.document.getElementById('msg')
    t = Number(tabu.value)
    var cont = 0
    txtarea.innerHTML=''
    while (cont <= 10) {
        txtarea.innerHTML+=(`${t} x ${cont} = ${t*cont}\n`)
        cont++
    }
    }