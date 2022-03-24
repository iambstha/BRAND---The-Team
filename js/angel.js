        const page = document.querySelector(".a_page");
        const nmode = document.querySelector(".a_nmode");
        const mmode = document.querySelector(".a_mmode");
        var mode;
        
        
        nmode.addEventListener('click', ()=>{
            mode = document.querySelector("#a_active");
            if(mode.className === "a_nmode"){
                page.style.backgroundColor = '#111';
                page.style.color = '#fff';
                document.querySelectorAll(".a_link").forEach(a_link => {a_link.style.color = '#fff';});
                mmode.setAttribute('id', 'a_active'); 
                nmode.removeAttribute('id'); 
                nmode.style.display = "none";
                mmode.style.display = "flex";
            }
        })
    
        mmode.addEventListener('click', ()=>{
                
            mode = document.querySelector("#a_active");
            if(mode.className === "a_mmode"){
                page.style.backgroundColor = '#fff';
                page.style.color = '#4d4847';
                document.querySelectorAll(".a_link").forEach(a_link => {a_link.style.color = '#4d4847';});
                nmode.setAttribute('id', 'a_active');
                mmode.removeAttribute('id');
                mmode.style.display = "none";
                nmode.style.display = "flex";
            }
        })