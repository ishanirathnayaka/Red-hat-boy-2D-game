// key event
function keyCheck(event){

    //enter key
    if(event.which==13){

        if(runWorkerId==0){

            runWorkerId = setInterval(run,100);
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
var boyMarginTop = 500;

function jump(){

    jumpImageNumber++;

    //jump fly
    if(jumpImageNumber<=7){
        boyMarginTop = boyMarginTop - 30;
        boyId.style.marginTop = boyMarginTop + "px";
    }

    //jump image crash
    if(jumpImageNumber==13){
        jumpImageNumber=1;

        clearInterval(jumpWorkerId);
        runWorkerId=setInterval(run,100);

        jumpWorkerId = 0;
    }

    boyId.src = "Jump (" +jumpImageNumber+ ").png"



}