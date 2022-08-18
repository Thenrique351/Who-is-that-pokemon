async function getPokemons(id)
{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url);
    const data= await response.json();
    console.log('data: ', data);
    //await Promise.all(data)
    const resp = {id: data.id , name: data.name, img: data.sprites.front_default}
    return resp;
}


export default getPokemons;