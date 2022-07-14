(function () {
    alert("este projeto ainda esta na versao beta entao coloque apenas valores com o final '0' ou '5'  BY: DANIEL LEDGER ")
    var nota_5 = 5
    var nota_10 = 10
    var nota_20 = 20
    var nota_50 = 50
    
    var $button_confirm = document.querySelector(".button_confirm")
    var $input = document.querySelector("input")
    var $display = document.getElementById("span")

    $input.addEventListener("keydown", function (e) {
        if (e.keyCode==13){
        sacar = $input.value
        contarNota(sacar)}
    })

    $button_confirm.addEventListener("click", function () {
        sacar = $input.value
        contarNota(sacar)
    })
    function contarNota(e) {
        var sacar = 0
    var cont_5 = 0
    var cont_10 = 0
    var cont_20 = 0
    var cont_50 = 0
    var valor_final = 0
        valor_final = e
        while (true) {
            if (valor_final >= nota_50 && valor_final != 0) {
                cont_50 += 1
                valor_final -= nota_50

            }
            else if (valor_final >= nota_20 && valor_final != 0) {
                cont_20 += 1
                valor_final -= nota_20

            }
            else if (valor_final >= nota_10 && valor_final != 0) {
                cont_10 += 1
                valor_final -= nota_10
            }

            else if (valor_final >= nota_5 && valor_final != 0) {
                cont_5 += 1
                valor_final -= nota_5
            }


            else if (valor_final == 0) {
                break
            }
        }
        $display.innerHTML = "valor a sacar: " + e + " <br> notas de 50 reais: " + cont_50 + "<br>notas de 20 reais:" + cont_20 + "<br>nota de 10 reais: " + cont_10 + "<br>nota de 5 reais: " + cont_5

    }

})() 
