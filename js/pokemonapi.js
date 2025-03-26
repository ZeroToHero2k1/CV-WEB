document.getElementById("searchPokemon").addEventListener("click",function(){
    const myDiv = document.getElementById("pokemonOutput");
    while (myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild);
    }
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
        // console.log(data);
        //Lất ảnh Pokemon
        const pokemonOutput=data.sprites.front_default;
        const imgOfPokemon=document.getElementById("imageOfPokemon");
        imgOfPokemon.src=pokemonOutput;
        imgOfPokemon.style.display="block";
        //Lấy hệ của Pokemon
        let typePoke=new Array();
        typePoke=data.types;
        const outPutPokemonDiv=document.getElementById("pokemonOutput");
        for(let i=0;i<=typePoke.length-1;i++){
            const newParagraph  = document.createElement("p");
            const textNode = document.createTextNode(typePoke[i].type.name);
            newParagraph.appendChild(textNode);
            newParagraph.style.color="white";
            if(textNode.textContent==="fire"){               
                newParagraph.style.backgroundColor="red";
            }
            else if(textNode.textContent==="normal"){
                newParagraph.style.backgroundColor="grey";
            }
            else if(textNode.textContent==="fighting"){
                newParagraph.style.backgroundColor="orange";
            }
            else if(textNode.textContent==="water"){
                newParagraph.style.backgroundColor="blue";
            }
            
            outPutPokemonDiv.appendChild(newParagraph);
        }
    }
    catch(error){
        console.log(error);
    }

}