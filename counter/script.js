function contar(){
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let pass = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    if (fim.value.length == 0  || pass.value.length == 0 || inicio.value.length ==0){
        res.innerHTML=('[ERRO]! Preencha todos os dados e tente novamente!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if(p <= 0){
            alert(`O passo pasara a ser '1' para poder contar` )
            p = 1
        }else if(i < f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} `
            }
        }else{
            for(let c = i;c >= f; c -= p)
            res.innerHTML += `${c} `
        }
    }
}
function limpar(){
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let pass = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    inicio.value = ''
    fim.value = ''
    pass.value = ''
    res.innerHTML = 'Preparando a contagem...'
}