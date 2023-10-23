window.onload= ()=>
{
    runquote();
}
runquote= ()=>
{
    let button=document.getElementById('button');
    let quote=document.getElementById('quote');
    button.onclick = ()=>{
        let quotes = [
        "The only way to do great work is to love what you do.",
        "In the middle of every difficulty lies opportunity.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "The best way to predict the future is to create it.",
        "The only thing necessary for the triumph of evil is for good men to do nothing.",
        "Life is what happens when you're busy making other plans.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "The only impossible journey is the one you never begin.",
        "It does not matter how slowly you go as long as you do not stop.",
        "The only impossible journey is the one you never begin."
        ];  
        let randomquote = Math.floor(Math.random()*quotes.length);
        quote.textContent="\""+quotes[randomquote]+"\"";
    }
}