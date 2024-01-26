const searchInput= document.getElementById("search-input");
const resultsArtist = document.getElementById ("result-artist");
const resultPlaylist = document.getElementById ("playlist");

/*consumir API*/
function requestAPI(searchTerm){
    const url= `http://localhost:3000/artists?name_like=${searchTerm}` /*qdo backend entregar a API, é só colocar o endereço aqui*/
    fetch(url)
    .then((response)=>response.json())
    .then((result)=>displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add("hidden");
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById("artist-img");

    result.forEach(element => { /*isso é uma iteração*/
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;    
    });

    resultsArtist.classList.remove("hidden");

}

document.addEventListener ("input", function(){
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    if (searchTerm === ""){
        resultPlaylist.classList.remove("hidden"); /*incluir playlist*/
        resultsArtist.classList.add("hidden");/*retirar artistas*/
        return; /*return pára a execução do código*/ 
       }
       resultPlaylist.classList.add("hidden"); 
       resultsArtist.classList.remove("hidden");  
       requestAPI(searchTerm);
})