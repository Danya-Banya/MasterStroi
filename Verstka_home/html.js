    let d = document.querySelectorAll('.tabletka td')
    d.forEach(c => {
        c.addEventListener('click', ()=>{
         c.classList.toggle('active')
         
        })
    });
    

