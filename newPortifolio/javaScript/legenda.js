// Escrever Habilidades
        //guardar texto da legenda, e tag da legenda
        var texto = "< Estudante de Analise e Desenvolvimento de Sistemas >";
        var legenda = document.getElementById("legenda");
            //Inicializar o contador
            let cont = 0;
           setTimeout(()=>{
            const timer = setInterval(()=> {//Escrever uma legenda
                if (cont < texto.length) {
                    legenda.innerHTML += texto.charAt(cont);
                    cont++;
                }else{
                    clearInterval(timer)
                    legenda.classList.add("esconder")
                }
    
                },120) ;

           },1000)
            

            
           