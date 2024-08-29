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

function jump(){

    jumpImageNumber++;

    //jump image crash
    if(jumpImageNumber==13){
        jumpImageNumber=1;
    }

    boyId.src = "Jump (" +jumpImageNumber+ ").png"



}