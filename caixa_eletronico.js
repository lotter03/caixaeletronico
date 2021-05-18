function Verificar(){


   
    var numValor = document.getElementById('txtSaque')
    var out100 = document.getElementById('out100')
    var out50 = document.getElementById('out50')
    var out10 = document.getElementById('out10')
    var notas100 = document.getElementById('notas100')
     var notasa = Number(txtSaque.value);
     var notasb = Number(txtSaque.value)
     var notasc = Number(txtSaque.value)


     


    var valor = Number(txtSaque.value)

    notasa = Math.floor(valor / 100)
    notasb = Math.floor((valor % 100) / 50)
    notasc = Math.floor(((valor % 100) % 50) / 10)




    out100.textContent = `${notasa} Nota(s) de R$ 100`
    out50.textContent = `${notasb} Nota(s) de R$ 50`
    out10.textContent = `${notasc} Nota(s) de R$ 10`

    

}



document.getElementById('btnVerificar').addEventListener('click', Verificar)