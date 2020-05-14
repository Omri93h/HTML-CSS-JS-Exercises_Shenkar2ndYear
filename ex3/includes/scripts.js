

var first_name = "omri";
var last_name = "haham";

total_boxes = first_name.length * last_name.length;


window.onload = function(){
    for(i=1 ; i<20 ; i++){
        this.document.getElementById("box-container-3").innerHTML += '<section class="quad"></section>';
    }

    this.document.getElementById("change-color").onclick = function(){
        for (i=0 ; i< first_name.length ; i++){
            document.getElementsByClassName("quad")[i].style.background = "linear-gradient(lightgreen, olive )";
        };
        document.getElementById("first-letter").style.color = "transparent";
    };

    this.document.getElementById("cancel-change").onclick = function(){
        for (i=0 ; i < first_name.length ; i++){
            document.getElementsByClassName("quad")[i].style.background = "white";
        }
        document.getElementById("first-letter").style.color = "white";
    }

}

