var userClickedPattern = [];

var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;

var check = true;

$(document).keypress(function(){

    if(check == true){
     
        $("h1").html("Level " + level);
        nextSequence();
        check = false;
        
    }

});

$(".btn").click(function(){

    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log(userClickedPattern);
    console.log(gamePattern);
    checkAnswer(userClickedPattern.length-1);

});

function nextSequence(){

    
    level++;
    $("h1").html("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

}

function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

function playSound(sound){

    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();

}


function checkAnswer(bhaloo){

    if(userClickedPattern[bhaloo] == gamePattern[bhaloo]){
        console.log("correct");
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }    
    } else {
        console.log("incorrect");
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").html("GAME OVER <br>Refresh to restart or press a button again");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
} 

function startOver(){
    level = 0;
    gamePattern = [];
    check = true;
    userClickedPattern = [];
}
$(".fas").click(function(){
    $(".clown").toggleClass("active");
});
// function arrayCheck(a, b){
//     // if(a.length == b.length) return false;
//     for(var i = 0; i<b.length; i++){
//         if(a[i] != b[i]) return false;
//     }
//     return true;

// }
