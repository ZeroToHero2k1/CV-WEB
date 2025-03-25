document.getElementById("searchPokemon").addEventListener("click",function(){
    PokedexByPhuoc();
})
async function PokedexByPhuoc(){
    try{
        const pokemonName= document.getElementById("pokemonName").value.toLowerCase();
        const pokeapi= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!pokeapi.ok){
            alert("Không có Pokemon này trong Pokedex, vui lòng nhập đúng tên");
        }
        const data=await pokeapi.json();
        console.log(data);

        const pokemonOutput=data.sprites.front_default;
        const imgOfPokemon=document.getElementById("imageOfPokemon");
        imgOfPokemon.src=pokemonOutput;
        imgOfPokemon.style.display="block";

    }
    catch(error){
        console.log(error);
    }

}