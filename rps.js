let startEl = document.getElementById("button")
let one = document.getElementById('player1')
let versus = document.getElementById("vs")
let two = document.getElementById("player2")
let alertEl = document.getElementById("alert")
let emotes = ["🗿","📄","✂️"]
let random = Math.floor(Math.random()*3)
let gameHasStarted = false
let emojiPicked = false


function gt(){
    startEl.textContent ="𝐂𝐡𝐨𝐨𝐬𝐞!"
    one.textContent ="🗿"
    versus.textContent = "📄"
    two.textContent="✂️"
    gameHasStarted = true
    alertEl.innerText = ""
    random = Math.floor(Math.random()*3)
}

function p1(){
    if (gameHasStarted === false && emojiPicked === false){
        alertEl.textContent = "You haven't picked an emoji yet!"
    }
     else if (gameHasStarted === true){
        one.innerText = "🗿"
        versus.innerText = "🆚"
        two.innerText = emotes[random]
        startEl.textContent = "𝐑𝐞𝐬𝐭𝐚𝐫𝐭?"
        if (one.innerText === "🗿" && two.innerText === "📄"){
            alertEl.innerText = "Player 2 has won!"}
            else if (one.innerText === "🗿" && two.innerText === "✂️"){
                alertEl.innerText = "Player 1 has won!"}
                else if (one.innerText === "🗿" && two.innerText === "🗿"){
                    alertEl.innerText = "The game has tied!"
                }else if ( gameHasStarted === true && emojiPicked === true){
                
                }
            }
       
    }


function vs(){
    if (gameHasStarted === false && emojiPicked === false){
        alertEl.textContent = "You haven't picked an emoji yet!"
    }
    else if ( gameHasStarted === true && emojiPicked === false){
        one.innerText = "📄"
        versus.innerText = "🆚"
        two.innerText = emotes[random]
        startEl.textContent = "𝐑𝐞𝐬𝐭𝐚𝐫𝐭?"  
    } else if ( gameHasStarted === true && emojiPicked === true){
        
    }
    
}

function p2(){
    if (gameHasStarted === false && emojiPicked === false){
        alertEl.textContent = "You haven't picked an emoji yet!"
    }
    else if (gameHasStarted === true){
        one.innerText = "✂️"
        versus.innerText = "🆚"
        two.innerText = emotes[random]
        startEl.textContent = "𝐑𝐞𝐬𝐭𝐚𝐫𝐭?"
    }else if ( gameHasStarted === true && emojiPicked === true){
    
    }
}
    
