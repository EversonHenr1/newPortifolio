//Adicionar Habilidades
    //Guardar o container pai das habilidades
    const paiHabilidade = document.querySelector("#container-graficos > aside")
    //Guardar o templade
    const temHabilidade = document.querySelector("#tempHabilidade")
    //Array com graficos
    let grafHabilidade = []
        //Arrays com informações dos graficos
        let habilidades = ["Excel","HTML","css","JavaScript","SQL","linguagem C","Java(android)","Linguagem UML","Node.JS"]
        let habilidadeTam =["40%","70%","68%","35%","40%","35%","25%","25%","15%"]

            //ForEach que criara os graficos
            habilidades.forEach((e,i,a)=>{
                //template,titulo,tamanho
                const template = temHabilidade.cloneNode(true)
                const hab = template.querySelector("span")
                const porcentagem = template.querySelector("p")
                const progress = template.querySelector(".progress")
                //remover id 
                template.removeAttribute("id")
                //Aplicar  as informações dos graficos
                hab.textContent = e;
                porcentagem.textContent ="("+ habilidadeTam[i] + ")"
                progress.style.width = habilidadeTam[i]; 
                //Aplicar o conteudo ao Site
                paiHabilidade.appendChild(template)
            })
        
//Animação de X na menu
    //Guardar o menu
    const bars = document.querySelector('#barras')
    //Guardar as barras do menu
    const barras = document.querySelectorAll('.menu')
    //Guardar o menu
    const menu = document.querySelector("#menu")
        //Quando clicar no botão abri o cabeçario/menu
        bars.onclick = ()=>{
            //Abrir o menu
            menu.classList.toggle("nav-hidden")
            barras.forEach((e)=>{ // Fazer o X
                e.classList.toggle('xBAr')
            })
        }
        //Sumir com botão dependendo do scroll
        window.addEventListener('scroll', ()=> {
            //guardar a posição do scroll 
            var scrollPosition = this.scrollY;

            if (scrollPosition < 1000) { //Sumir o cabeçario na pagina inicial
                bars.style.display="none";
                menu.style.display="none";
            }else if(scrollPosition >= 1000){
                bars.style.display="block";
                menu.style.display="block";
            }
            if(this.matchMedia("(max-width: 1000px)").matches){ //Aparecer sempre em telas menores
                bars.style.display="block";
                menu.style.display="block";
            }  
            }); 
 //Experiencias Alterar

    //guardar elementos do container
    const btnEx = document.querySelectorAll("#lista-ex > li")
    const titulo = document.getElementById("titulo")
    const data = document.getElementById("data")
    const text = document.getElementById("text")
    const site = document.getElementById("site")
    const linkedin = document.getElementById("linkedin")
        //Modelo Com Atributos
        class ex {
            constructor(titulo,data,txt,site,linkedin,siteop,linkop){
                this.titulo = titulo;
                this.data = data;
                this.txt = txt;
                this.site = site;
                this.linkedin = linkedin;
                this.siteop =siteop
                this.linkop = linkop
            }
            alterar(){
                titulo.textContent = this.titulo;
                data.textContent = this.data;
                text.textContent = this.txt;
                site.href=this.site;
                linkedin.href = this.linkedin;
                site.style.opacity=this.siteop
                linkedin.style.opacity=this.linkop
            }
        }
        //Inserir objetos com todas as informações
        const ex0 = new ex("Estagiario ou Junior TI","coming soon","Estou em busca de uma oportunidade na qual possa adquirir novas experiências, como ingressante na área de TI, na qual curso faculade e conheço algumas linguagens como apresentado abaixo;","","",0,0)
        const ex1 = new ex("Jovem aprendiz administrativo","21/02/2022 a 13/01/2023", "Dentro da empresa minhas principais atividades são: Realizar questionamento com motorista após realizarem suas viajens, Realizar a baixa de finalização de entregas, Realizar leituras de coletas e baixa-las no sistema, Fazer questionamentos e lançar ocorrencias no sistema, Arquivamento de entregas.","https://www.viapajucara.com.br/","https://www.linkedin.com/company/viapajucaratransportes/",1,1)
        const ex2 = new ex("Estagio Auxiliar Geral (contagem)","13/04/2021 a 31/12/2021","Dentro da empresa tinha como principais atividades: Realizar a contagem dos produtos no armazem e no espaço de vendas, Fazer lançamento dos resultados adquiros no sistema  Comunicão com o setor de inventario; Além  de ajudar no abastecimento, e atendimento ao cliente.","https://xsupermercados.com.br/","https://www.linkedin.com/company/x-supermercados/",1,1)
        //Criar a arr com todos os objetos
        const experi = []
        experi.push(ex0); experi.push(ex1); experi.push(ex2);

            btnEx.forEach((e,i,a)=>{
                e.addEventListener("click",()=>{
                    a.forEach((e) => e.classList.remove("btnHoverEX"));
                    experi[i].alterar();
                    e.classList.add("btnHoverEX")                   
                })
            })
 // Escrever Habilidades
        //guardar texto da legenda, e tag da legenda
        var texto = "< Estudante de Analise e Desenvolvimento de Sistemas >";
        var legenda = document.getElementById("legenda");
            //Inicializar o contador
            let cont = 0;
            const timer = setInterval(()=> {//Escrever uma legenda
            if (cont < texto.length) {
                legenda.innerHTML += texto.charAt(cont);
                cont++;
            }
            },50);
//Inserir projetos
    //guardar o pai
    const paiProje = document.querySelector("#paiProj")
    //Modelo dos projetos
    class proj{
        constructor(background,titulo,texto,icone,urls,alerta,link){
            this.background = background;
            this.titulo=titulo;
            this.texto = texto;
            this.icone = icone;
            this.urls = urls;
            this.alerta = alerta;
            this.link = link
        }
        inserir(){
            //Instanciar os elementos 
            let temProje = document.querySelector("#projTemp").cloneNode(true)
            const temProjeP = temProje.querySelector("p")
            const temProjeH1 = temProje.querySelector("h4") 
            const temProjeI = temProje.querySelector("i")
            const temProjeA = temProje.querySelector("a")
            //remover o id
            temProje.removeAttribute("id")
            //Alterar os elementos com objetos 
            temProje.style.backgroundImage = "url('"+this.background+"')";
            temProjeP.textContent = this.texto;
            temProjeH1.textContent = this.titulo;
            if(this.urls==""){
                temProje.style.cursor = "no-drop"
            }
            if(this.icone == ""){ //SE icone estiver vazio colocar essa classe padrão
                temProjeI.classList.add("fa-link");
            }else{
                temProjeI.classList.add(this.icone);
            }
            temProjeA.href = this.urls;
            //retornar o templade
            if(this.alerta != null){//SE alerta não estiver vazio
                temProje.onclick = ()=>{
                    if(this.link != null){//Se link nao estiver vazio criar o confirm
                        var resultado = confirm(this.alerta);
                        if (resultado) {
                        window.open(this.link, "_blank");
                        }
                    }else{//caso contrario criar alerta
                        alert(this.alerta)
                    }
                }
            }
            return temProje;
        }
    }
        //Criar Objetos com dados do projetos
        const proj1 = new proj("./imagens/projetos/zoo.png","zoologico de guarulhos","Projeto acâdemico (primeiro site), reformulação site site Zoologico de Guarulhos","","https://eversonhenr1.github.io/site_Zoologico_Guarulhos/Zoologico/")
        const proj2 = new proj("./imagens/projetos/cpfitness.png","Academia CP Fitness","Projeto acâdemico (primeiro site com banco de dados), desenvolver um site que tenha Banco da dados SQL","","https://eversonhenr1.github.io/site_Cp_Fitness/Home/","Site = Cancel\n\nVideo = OK","https://www.youtube.com/watch?v=0IAMcx7rZpA")
        const proj3 = new proj("./imagens/projetos/zologico.png","Zoologico reformulado","Em processo de Desenvolvimento. Reformulação do meu primeiro site com novos conhecimentos adquiridos","fa-lock","","Site em Desenvolvimento" )
        const proj4 = new proj("./imagens/projetos/portifolio.png","Zoologico reformulado","Primeiro portfólio desenvolvido, somente para adquirir uma base","","https://eversonhenr1.github.io/portifolio/")
        const proj5 = new proj("./imagens/projetos/multiplica.png","Multiplica","Aplicativo de finanças desenvolvido em JAVA, XML, SQL Lite no Android Studio","fa-youtube-play","https://www.youtube.com/watch?v=cGCnGwEJFhk")
        const proj6 = new proj("./imagens/projetos/blog.png","Blog"," Estou desenvolvendo uma aplicação em NODE.js, utilizando: Express, Mongodb, Mongoose. Aplicação em seus primeiros passos!","fa-youtube-play","https://www.youtube.com/watch?v=62UA_ZU5U1c&feature=youtu.be", "Video1 = cancel\n\nVideo2 = ok","https://youtu.be/kEd-k4kr5PU")
        const proj7 = new proj ("./imagens/projetos/js.png","Projetos JavaScript","Algums projetos para visualizar meus conhecimentos em javascript esses projetos foram construido de maneira basicas","","https://eversonhenr1.github.io/projetosJS/Projetos%20JavaScript/")
        //Criar Array com todos os projetos
        let arrProj = [proj1,proj2,proj3,proj4,proj5,proj6,proj7];
       

        arrProj.forEach((e,i)=>{ //Inseir os Projetos na pagina  
            paiProje.appendChild(arrProj[i].inserir())
        })
   
    
    
  

 
        


    
