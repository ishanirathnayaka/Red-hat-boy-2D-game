// key event
function keyCheck(event){

    //enter key
    if(event.which==13){

        if(runWorkerId==0){

            runWorkerId = setInterval(run,100);
            moveBackgroundWorkerId = setInterval(moveBackground,100);
            scoreWorkerId = setInterval(updateScore,100);
            createBlockWorkerId = setInterval(createBlock,100);
            moveBlockWorkerId= setInterval(moveBlock,100);


        }



    }

    //space key
    if(event.which==32){

        if(jumpWorkerId==0){


             clearInterval(runWorkerId);
            jumpWorkerId= setInterval(jump,100);
        }


        
    }
}

//boy run
var boyMarginTop = 425;
var runWorkerId = 0;
var boyId = document.getElementById("boy");
var runImageNumber = 1;
function run(){

    runImageNumber++;

    //run image crash
    if(runImageNumber==9){
        runImageNumber=1;
    }

    boyId.src = "Run (" +runImageNumber+ ").png";


}

//boy jump
var jumpWorkerId = 0;
var jumpImageNumber = 1;
var boyMarginTop = 400;

function jump(){

    jumpImageNumber++;

    //jump fly
    if(jumpImageNumber<=7){
        boyMarginTop = boyMarginTop - 30;
        boyId.style.marginTop = boyMarginTop + "px";
    }

    //jump land
    if(jumpImageNumber >= 8 ){
        boyMarginTop = boyMarginTop + 30;
        boyId.style.marginTop = boyMarginTop + "px";
    }

    //jump image crash
    if(jumpImageNumber==13){
        jumpImageNumber=1;

        clearInterval(jumpWorkerId);
        runWorkerId=setInterval(run,100);

        jumpWorkerId = 0;

            //startin a jump
            if(scoreWorkerId==0){
                scoreWorkerId=setInterval(updateScore,100);
            }

            if (moveBackgroundWorkerId==0){
                moveBackgroundWorkerId=setInterval(moveBackground,100);
            }

            if(createBlockWorkerId==o){
                createBlockWorkerId=setInterval(createBlock,100);
            }

            if(moveBlockWorkerId==0){
                moveBlockWorkerId=setInterval(moveBlock,100);
            }
    }

    boyId.src = "Jump (" +jumpImageNumber+ ").png";


}

//background
var backgroundId = document.getElementById("background");
var positionX = 0;
var moveBackgroundWorkerId = 0;

function moveBackground(){

    positionX = positionX - 20;
    backgroundId.style.backgroundPositionX = positionX + "px";
}

//score
var scoreId = document.getElementById("score");
var scoreWorkerId = 0;
var newScore = 0;

function updateScore(){

    newScore++;
    scoreId.innerHTML = newScore;

}

//create block
var blockMargiLeft = 100;
var createBlockWorkerId = 0;
var blockNumber = 1;

function createBlock(){

    var block = document.createElement("div");
    block.className = "block";
    block.id = "block" + blockNumber;

    blockNumber++;

    var gap = Math.random()*(1000-400) + 400;

    blockMargiLeft = blockMargiLeft +gap;
    block.style.marginLeft = blockMargiLeft + "px";

    document.getElementById("background").appendChild(block);

}

// move block
var moveBlockWorkerId=0;

function moveBlock(){
    for(var i=1;i<=blockNumber;i++){

        var currentBlock = document.getElementById("block" + i)
        var currentBlockMarginLeft = currentBlock.style.marginLeft;
        var newBlockMarginLeft = parseInt(currentBlockMarginLeft) - 20;
        
        currentBlock.style.marginLeft = newBlockMarginLeft + "px";
    }
}

//page reload

function reload(){

    location.reload();
}