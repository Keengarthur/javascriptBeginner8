let articles = document.querySelectorAll('article')


articles.forEach(article=>{
    let btn = article.querySelector('.moblink')
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('open')){
            btn.classList.remove('open')
        }
        else{
            btn.classList.add('open')
        }

        articles.forEach(item=>{
           if( item !==article) item.classList.remove('show')
        })
        article.classList.toggle('show')
    })
})

