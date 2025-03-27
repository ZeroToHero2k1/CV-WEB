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
        imgOfPokemon.style.width="300px";
        imgOfPokemon.style.height="fit-content";
        //Lấy hệ của Pokemon
        let typePoke=new Array();
        typePoke=data.types;
        const outPutPokemonDiv=document.getElementById("pokemonOutput");
        for(let i=0;i<=typePoke.length-1;i++){
            const newParagraph  = document.createElement("p");
            const textNode = document.createTextNode(typePoke[i].type.name);
            newParagraph.appendChild(textNode);
            newParagraph.style.color="white";
            newParagraph.style.width="fit-content";
            if(textNode.textContent==="normal"){               
                newParagraph.style.backgroundColor="grey";
            }
            else if(textNode.textContent==="fire"){
                newParagraph.style.backgroundColor="red";
            }
            else if(textNode.textContent==="water"){
                newParagraph.style.backgroundColor="blue";
            }
            else if(textNode.textContent==="electric"){
                newParagraph.style.backgroundColor="gold";
            }
            else if(textNode.textContent==="grass"){
                newParagraph.style.backgroundColor="green";
            }
            else if(textNode.textContent==="ice"){
                newParagraph.style.backgroundColor="whiteblue";
            }
            else if(textNode.textContent==="fighting"){
                newParagraph.style.backgroundColor="brown";
            }
            else if(textNode.textContent==="poison"){
                newParagraph.style.backgroundColor="violet";
            }
            else if(textNode.textContent==="ground"){
                newParagraph.style.backgroundColor="#eab676";
            }
            else if(textNode.textContent==="flying"){
                newParagraph.style.backgroundColor="#7cd2e3";
            }
            else if(textNode.textContent==="psychic"){
                newParagraph.style.backgroundColor="pink";
            }
            else if(textNode.textContent==="bug"){
                newParagraph.style.backgroundColor="#c1e37c";
            }
            else if(textNode.textContent==="rock"){
                newParagraph.style.backgroundColor="#cbc55c";
            }
            else if(textNode.textContent==="ghost"){
                newParagraph.style.backgroundColor="#9a1ebf";
            }
            else if(textNode.textContent==="dragon"){
                newParagraph.style.backgroundColor="#2651b9";
            }
            else if(textNode.textContent==="dark"){
                newParagraph.style.backgroundColor="#7b442a";
            }
            else if(textNode.textContent==="steel"){
                newParagraph.style.backgroundColor="gray";
            }
            else if(textNode.textContent==="fairy"){
                newParagraph.style.backgroundColor="#f1bee7";
            }
            newParagraph.style.marginLeft="3px";
            newParagraph.style.padding="3px";
            newParagraph.style.borderRadius="10px"
            
            outPutPokemonDiv.appendChild(newParagraph);
        }
    }
    catch(error){
        console.log(error);
    }

}
//khá hay đấy, để tạo mã nhân viên hoặc tính giờ phút dây dưới 10 thì sẽ có thêm số 0 ở đằng trước
//2 ở đây quy định String này chỉ được phép có 2 kí tự
const now=new Date();
console.log(String(now.getSeconds()).padStart(2,"0"));
//hasAttribute()
const a=document.getElementById("imageOfPokemon")
console.log(a.hasAttribute("style"));