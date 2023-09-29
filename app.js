const stone = document.getElementById('stone');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const display = document.getElementById('display');


const random1 =  ['Stone','Paper','Scissors'];


let aleatorio1= mixrandom();



    stone.addEventListener('click',function(){
        //boton de stone//
        if(aleatorio1 ==='Stone'){
            display.textContent = (`${aleatorio1}, EQUAL`);
        }else if(aleatorio1 ==='Scissors'){
            display.textContent = (`${aleatorio1}, YOU WIN`);
        }
        else{
            display.textContent = (`${aleatorio1},YOU LOSE`);
        }
    })

    paper.addEventListener('click',function(){
        //boton paper //
        if(aleatorio1 ==='Paper'){
            display.textContent =(`${aleatorio1}, EQUAL`)
        }else if(aleatorio1 ==='Stone'){
            display.textContent = (`${aleatorio1}, YOU WIN`);
        }else{
            display.textContent = (`${aleatorio1}, YOU LOSE`)
        }
    })

    scissors.addEventListener('click', function(){
        //boton scissor//
        if(aleatorio1 ==='Scissors'){
            display.textContent =(`${aleatorio1}, EQUAL`)
        }else if(aleatorio1 ==='Paper'){
            display.textContent = (`${aleatorio1}, YOU WIN`)
        }else{
            display.textContent =(`${aleatorio1}, YOU LOSE`)
        }
    })
    
    
    



function mixrandom(){
    
    for (let i = 0; i < 1; i++) {
    let newRandom1 = random1[(Math.floor(Math.random()*random1.length))];
        return(newRandom1); 
    }
    
}



