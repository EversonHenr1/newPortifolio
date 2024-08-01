window.addEventListener("load", function() {
    let texto = "< Desenvolvedor Web >";
    escreverLegenda(texto);
});

function escreverLegenda(txt) {
    let elLegenda = document.querySelector("#legenda");
    let contador = 0;

    let intervaloEscrita = setInterval(function() {
        if (contador < txt.length) {
            elLegenda.textContent += txt.charAt(contador);
            contador++;
        } else {
            clearInterval(intervaloEscrita);
            setTimeout(deletarLegenda, 1000); 
        }
    }, 120);

    function deletarLegenda() {
        let intervaloDeletar = setInterval(function() {
            if (elLegenda.textContent !== "") {
                elLegenda.textContent = elLegenda.textContent.substring(0, elLegenda.textContent.length - 1); 
            } else {
                clearInterval(intervaloDeletar);
                setTimeout(() => escreverLegenda(txt), 1000); 
            }
        }, 120);
    }
}
