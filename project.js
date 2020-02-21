var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for(var i = 0; i<squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function(){
    //generate all new colors;
    colors = generateRandomColors(numberOfSquares);
    //pick new color;;
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    // easyBtn.classList.remove("selected");
    for(var i =0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
});


colorDisplay.textContent = pickedColor;


for(var i =0; i < squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
        //grab color of clicked square
       var clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor){

            resetButton.textContent = "Play Again?";
            messageDisplay.textContent = "CORRECT!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }
        else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){

    for (var i=0; i<squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    //random Math.random generate num, but if we need number betwen 1 and 6 we need
    //just multiplay by 6 and + 1 = Math.random()*6+1, but number nut be like 1 
    //then we need use Math.floor
    //Math.floor(Math.random * 6 + 1)
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arrr =[];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color and push to the array
        arrr.push(randomColor());
    }
    //return that array
    return arrr;
}

function randomColor(){
    //pick a "red" from 0 to 255
    var r =Math.floor(Math.random() * 256);
     //pick a "green" from 0 to 255
    var g =Math.floor(Math.random() * 256);
      //pick a "blue" from 0 to 255
    var b =Math.floor(Math.random() * 256);
    return "rgb("+ r +", " + g +", " + b +")";
}