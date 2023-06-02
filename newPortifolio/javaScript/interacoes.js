const menu = document.getElementById('menu')
const bar = document.getElementById('barras')
const barras = document.querySelectorAll('.menu')

/*----------------------Fazer o Cabeçario aparecer no click e a animação ------------------------- */
bar.onclick = function hiddenMenu(){

    if(menu.classList[0] == "nav-hidden"){
        menu.classList.remove('nav-hidden')
        menu.classList.add('nav-off')
       console.log(menu.classList)
       barras.forEach(bar =>{

        bar.classList.remove('xBAr')
       })
       
       
    }else if(menu.classList[0] == "nav-off"){
        menu.classList.remove('nav-off')
        menu.classList.add('nav-hidden')
       
           barras.forEach(bar =>{

            bar.classList.add('xBAr')
           })
   
    }
    

}
/*----------------------Sumir com o botão depedendo do scroll ------------------------- */

    window.addEventListener('scroll', function() {
    
        var scrollPosition = window.scrollY;
      
    
        if (scrollPosition < 1000) {
          bar.style.display="none";
          menu.style.display="none";
        
          
        }if(scrollPosition >= 1000){
            bar.style.display="block";
            menu.style.display="block";
        }
     if (window.matchMedia("(max-width: 1000px)").matches) {
            bar.style.display="block";
            menu.style.display="block";
          }  
      }); 
      


  /* ------------------------- Mudar as opções  de experiencias ---------------------------------------- */

const btnEX1 = document.getElementById("ex1")
const btnEX2 = document.getElementById("ex2")
const btnEX3 = document.getElementById("ex3")
const titulo = document.getElementById("titulo")
const data = document.getElementById("data")
const text = document.getElementById("text")
const site = document.getElementById("site")
const linkedin = document.getElementById("linkedin")

function alterarEX(event) {
    var clicado = event.target.id;
    
    

    if(clicado == "ex1"){
        
        titulo.innerHTML = "Estagiario ou Junior TI"
        data.innerHTML = "coming soon"
        text.innerHTML = "Estou em busca de uma oportunidade na qual possa adquirir novas experiências, como ingressante na área de TI, na qual curso faculade e conheço algumas linguagens como apresentado abaixo;"
        site.style.opacity="0"
        linkedin.style.opacity="0"
        btnEX1.classList.add("btnHoverEX")
        btnEX2.classList.remove("btnHoverEX")
        btnEX3.classList.remove("btnHoverEX")
    }
    if(clicado == "ex2"){
        
        titulo.innerHTML = "Jovem Aprendiz Administrativo"
        data.innerHTML = "21/02/2022 a 13/01/2023"
        text.innerHTML = "Dentro da empresa minhas principais atividades são: Realizar questionamento com motorista após realizarem suas viajens, Realizar a baixa de finalização de entregas, Realizar leituras de coletas e baixa-las no sistema, Fazer questionamentos e lançar ocorrencias no sistema, Arquivamento de entregas."
        site.style.opacity="1"
        linkedin.style.opacity="1"
        site.href = "https://www.viapajucara.com.br/"
        linkedin.href = "https://www.linkedin.com/company/viapajucaratransportes/"
        btnEX1.classList.remove("btnHoverEX")
        btnEX2.classList.add("btnHoverEX")
        btnEX3.classList.remove("btnHoverEX")
    }
    if(clicado == "ex3"){
        
        titulo.innerHTML = "Estagio Auxiliar Geral (contagem)"
        data.innerHTML = "13/04/2021 a 31/12/2021"
        text.innerHTML = "Dentro da empresa tinha como principais atividades: Realizar a contagem dos produtos no armazem e no espaço de vendas, Fazer lançamento dos resultados adquiros no sistema  Comunicão com o setor de inventario; Além  de ajudar no abastecimento, e atendimento ao cliente."
        site.style.opacity="1"
        linkedin.style.opacity="1"
        site.href = "https://xsupermercados.com.br/"
        linkedin.href = "https://www.linkedin.com/company/x-supermercados/"
        btnEX1.classList.remove("btnHoverEX")
        btnEX2.classList.remove("btnHoverEX")
        btnEX3.classList.add("btnHoverEX")
    }
    
}

btnEX1.onclick = alterarEX
btnEX2.onclick = alterarEX
btnEX3.onclick = alterarEX

const cp = document.getElementById("cp")

cp.onclick = function alerta(){
    alert("Video mostrando Banco de dados Link: https://www.youtube.com/watch?v=0IAMcx7rZpA")
}
const zoonew = document.getElementById("zooNEW")
zoonew.onclick = function alerta1(){
    alert("Site em desenvolvimento")
}

/* ESCREVER */

function escreverTexto(texto, elemento, velocidade) {
    var i = 0;
    var timer = setInterval(function() {
      if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, velocidade);
  }
  
  // Exemplo de uso:
  var texto = "< Estudante de Analise e Desenvolvimento de Sistemas >";
  var elemento = document.getElementById("legenda");
  var velocidade = 100; 
  
  escreverTexto(texto, elemento, velocidade);