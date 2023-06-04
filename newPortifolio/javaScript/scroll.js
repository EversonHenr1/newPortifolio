/*========================= Mudar a classe dos objetos quando aparecem ====== =============================   */
const observer = new IntersectionObserver(entries =>{
    console.log(entries)
    
    Array.from(entries).forEach(entry=>{
        if(entry.intersectionRatio>= 0.6){
            entry.target.classList.add('init-hidden-off') 
        }
        console.log(entry.isIntersecting)
    }
    )
},{
    threshold:[0.6,0.7]
})
/* ========================= Pegar todos elementos da class e guardar no objeto ============================= */
Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})


