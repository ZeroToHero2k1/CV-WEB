const input = document.getElementById('pokemonName');
const suggestionsContainer = document.getElementById('suggestions');

// Hàm gọi API của PokeAPI để lấy danh sách Pokémon
async function fetchPokemonNames(query) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1000`; // Lấy tối đa 1000 Pokémon
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Lọc các tên Pokémon phù hợp với query
        const filteredNames = data.results
            .map(pokemon => pokemon.name)
            .filter(name => name.toLowerCase().includes(query.toLowerCase()));
        
        return filteredNames;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return [];
    }
}

// Xử lý khi người dùng nhập vào ô input
input.addEventListener('input', async function () {
    const query = input.value;
    
    if (query.length > 0) {
        const filteredSuggestions = await fetchPokemonNames(query);
        showSuggestions(filteredSuggestions);
    } else {
        suggestionsContainer.style.display = 'none';
    }
});

// Hiển thị các gợi ý dưới dạng thẻ <span>
function showSuggestions(suggestions) {
    // Xóa gợi ý cũ
    suggestionsContainer.innerHTML = '';
    
    if (suggestions.length > 0) {
        suggestionsContainer.style.display = 'block';
        
        // Giới hạn số lượng gợi ý hiển thị là 10
        const limitedSuggestions = suggestions.slice(0, 10);
        
        limitedSuggestions.forEach(suggestion => {
            const span = document.createElement('div');
            span.classList.add('suggestion-item');
            span.textContent = suggestion;
            
            // Thêm sự kiện khi nhấp vào gợi ý
            span.addEventListener('click', function () {
                input.value = suggestion;
                suggestionsContainer.style.display = 'none';
            });
            
            suggestionsContainer.appendChild(span);

        });
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

// Đóng các gợi ý khi người dùng nhấp ra ngoài
document.addEventListener('click', function (event) {
    if (!input.contains(event.target) && !suggestionsContainer.contains(event.target)) {
        suggestionsContainer.style.display = 'none';
    }
});


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
console.log("===========================HỌC DOM=============================");
const now=new Date();
console.log("Số giây của phút hiện tại: "+ String(now.getSeconds()).padStart(2,"0"));
//hasAttribute()
const a=document.getElementById("imageOfPokemon")
console.log(a.hasAttribute("style"));
let b=document.getElementById("divTextClassList");
console.log(b.classList);//classList sẽ có chức năng thêm, xóa, contains, replace, toggle(loại bỏ phần tử đã tồn tại và loại bỏ nếu chưa có)
console.log("===Create Elements===");
const newElement=document.createElement("h4");
const textOfNewElements=document.createTextNode("Xin chào các bạn, mình chỉ là một người chăm chỉ");//thật ra có thể gán thẳng dòng String này vào luôn
newElement.appendChild(textOfNewElements);//nhưng mình làm thế để biết thêm nhiều câu lệnh
console.log(newElement);
const test=document.getElementById("pageDetail");
test.prepend(newElement);
