import getPokemons from "./fetchAPI.js";

const input = document.querySelector("#send");
console.log('Teste');
getPokemons();

input.addEventListener("click", async function(e){
    e.preventDefault();

  const nome = document.querySelector("#name");



    const value = nome.value;
    
    
    const pokemon = await getPokemons(value);
    const imagem = document.querySelector("#imagem")
    imagem.src = pokemon.img
    console.log(imagem);
});


