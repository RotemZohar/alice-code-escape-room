function found(){
    // var img = document.createElement("img");
    // img.src = "";
    alert("you found me!");
    document.getElementById('friend1').style.left="200px";
}

function found2(src, width){
    // var img = document.createElement("img");
    // img.src = "";
    alert("you found me!");
    document.getElementById('friend2').style.left="200px";
    document.body.style.backgroundImage = "url('../Images/thelittlemermaid_background.PNG')";
    var img = document.createElement("img");
    img.src = "../Images/the_little_mermaid_ursula.PNG" ;
    img.width = 250;
    img.style.right="2000px";
    //document.getElementById('img').style.top="100px";
    document.body.appendChild(img);
}