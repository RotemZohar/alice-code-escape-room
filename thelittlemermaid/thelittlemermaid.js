foundfish=false
foundcrab=false
function found(){
    // var img = document.createElement("img");
    // img.src = "";
    alert("you found me!");
    document.getElementById('friend1').style.left="200px";
    foundfish=true
    if (foundcrab==true && foundfish==true){
        nextstage()
    }
}

function found2(src, width){
    // var img = document.createElement("img");
    // img.src = "";
    alert("you found me!");
    foundcrab=true
    if (foundcrab==true && foundfish==true){
        nextstage()
    }
    

}

function nextstage(){

    document.getElementById('friend2').style.left="200px";
    document.body.style.backgroundImage = "url('../Images/thelittlemermaid_background.PNG')";
    var img = document.createElement("img");
    img.src = "../Images/the_little_mermaid_ursula.PNG" ;
    img.id="ursula";
    img.width = 250;
    document.body.appendChild(img);
    var img1 = document.createElement("img");
    img1.src = "../Images/thelittlemermaid_legs1-removebg.png" ;
    img1.id="legs1";
    img1.onclick=function(){legs1oc()};
    img1.width = 200;
    document.body.appendChild(img1);
    var img2 = document.createElement("img");
    img2.src = "../Images/thelittlemermaid_legs2-removebg.png" ;
    img2.id="legs2";
    img2.onclick=function(){legs2oc()};
    img2.width = 150;
    document.body.appendChild(img2);
    setTimeout(function() {alert("ursula: if you want your legs then you would have to guess which legs are yours!")}, 500);
}




function legs1oc(){
    alert("wrong legs try again!")
}

function legs2oc(){
    alert("correct!")
}