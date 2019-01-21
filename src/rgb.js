var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var pickedColour;
//give random colours
hardButton.setAttribute("disabled", "true");
startGame(6);
easyButton.addEventListener("click", function(){
    hardButton.removeAttribute("disabled");
    easyButton.setAttribute("disabled", "true");
    messageDisplay.textContent = "";
    for(var i = 3; i < squares.length; i++ ){
        squares[i].style.display = "none";
        startGame(3);
    }
});
hardButton.addEventListener("click", function(){
    easyButton.removeAttribute("disabled");
    hardButton.setAttribute("disabled", "true");
    for(var i = 3; i < squares.length; i++ ){
        squares[i].style.display = "block";
        messageDisplay.textContent = "";
        startGame(6);
    }

});
function startGame(num){
    for(var i = 0; i < num; i++){
        squares[i].style.backgroundColor = randomColour();    
        squares[i].addEventListener("click", function(){ 
            var clickedColour = this.style.backgroundColor;
            if(clickedColour == pickedColour){
                messageDisplay.textContent = "Correct!";
                changeColours(pickedColour);
            }   
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
    //set winning colour
    pickedColour = randomSquare(num).style.backgroundColor;
    colourDisplay.textContent = pickedColour;

    resetButton.addEventListener("click", function(){
        for(var i = 0; i < num; i++){
            squares[i].style.backgroundColor = randomColour();
            messageDisplay.textContent = "";
        }
        pickedColour = randomSquare(num).style.backgroundColor;
        colourDisplay.textContent = pickedColour;
    });
}


// change all squares to winning colour
function changeColours(colour){
    for(var j = 0; j < squares.length; j++){
        squares[j].style.backgroundColor = colour;
     }
}

//generate a random colour
function randomColour(){
    var rgb = [];
    for(var i = 0; i < 3; i++){
       rgb.push(Math.floor(Math.random() * 255));
    }
    return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
}

//generate a random square
function randomSquare(num){
    var random = Math.floor(Math.random() * num);
    return squares[random];
}

