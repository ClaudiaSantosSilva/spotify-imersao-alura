const searchInput= document.getElementById("search-input");
const resultsArtist = document.getElementById ("result-artist");
const resultPlaylist = document.getElementById ("playlist");

/*consumir API*/
function requestAPI(searchTerm){
    const url="http://localhost:3000/artists" /*qdo backend entregar a API, é só colocar o endereço aqui*/
    fetch()
}

document.addEventListener ("input", function(){
    const searchTerm = searchInput.ariaValueMax.toLowerCase();
    if (searchTerm === ""){
        resultPlaylist.classList.add("hidden"); /*incluir playlist*/
        resultsArtist.classList.remove("hidden");/*retirar artistas*/
        return; /*return pára a execução do código*/ 
       }
})