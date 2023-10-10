const listaPokemon = document.getElementById('lista-pokemon')
const botonesHeader = document.querySelectorAll('.btn-header')

let url = 'https://pokeapi.co/api/v2/pokemon/1'





for (let i = 1; i <= 99; i++) {
    

    fetch(url+i)
    .then(response => response.json())
    .then(data => mostrarPokemon(data))
   
    
}



function mostrarPokemon(data){

    let tipos = data.types.map(type => `<p class=" ${type.type.name} tipo">${type.type.name}</p> `) 
    
    tipos = tipos.join('')
  

    let pokeId = `${data.id}`

   
    if(pokeId.length === 1){
        pokeId = "00"+ pokeId

    }else if(pokeId.length === 2){
        pokeId = "0"+ pokeId
    }

    

    listaPokemon.innerHTML += `
    <div class="pokemon col-lg-3 col-sm-6 col-xs-12 p-0   ">

    <div class="separator ">

        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-img">
            <img src="${data.sprites.other.home.front_default}" alt="${data.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="nombre-pokemon">${data.name}</h2>
            </div>
            <div class="tipo-pokemon">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="altura stat">${data.height}m</p>
                <p class="peso stat">${data.weight}KG</p>
            </div>
        </div>
   
    </div>



</div>
    
    `
    


}



botonesHeader.forEach(boton => boton.addEventListener('click',(e)=>{
    listaPokemon.innerHTML = '';
    /* traer ID  */
    const botonId = e.currentTarget.id;

    for (let i = 1; i <= 99; i++) {
    

        fetch(url+i)
        .then(response => response.json())
        .then(data => {
            
            if(botonId==='Ver-todos'){
                mostrarPokemon(data)
            }else {
                /* guardamos los dos tipos de pokemon*/
                const tipos = data.types.map(type => type.type.name)
                
                /*  */
                if(tipos.includes(botonId)){
                 

                    mostrarPokemon(data)
                }

            }
            
           
        })
       
        
    }
    


}))









