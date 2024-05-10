const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    try{
        const res = await fetch("/url", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                longURL:input.value
            })
        });
        input.value="";
        let data = await res.json();
        let shortenURL = data.shortenURL;
        let link = document.createElement("li")
        link.innerText= shortenURL;
        ul.appendChild(link);        
    }catch(err){
        console.log(err);   
    }
});