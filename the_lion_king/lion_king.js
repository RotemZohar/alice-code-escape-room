imgCharacter1=false
img1Character2=false
img2Character3=false
img3Character4=false
imgCharacter=4
//Character.delay(2000).fadeOut(3000); 
var interval0 = appearAndDisappear("Character0",2000); 
var interval1 = appearAndDisappear("Character1",1500); 
var interval2 = appearAndDisappear("Character2",2500);
var interval3 = appearAndDisappear("Character3",3000); 

function img(){
    alert("Aya");
    clearInterval(interval0);
    var image = document.getElementById("Character0");
    image.style.transform = "scaleX(-1) skewY(333deg) rotate(88deg)"
    imgCharacter=true
    if (imgCharacter==true && img1Character2==true && img2Character3==true && img3Character4==true){
        setTimeout(function() {
            alert("Good job, you defeated the hyenas, and now the cave opening is clear, and we can go through it to the next room.")
            alert("To move to the next room, click the cave opening")
            nextroom()
        }, 500);
    }
    

}

function img1(){
    alert("Ouch");
    clearInterval(interval1);
    var image = document.getElementById("Character1");
    image.style.transform = "scaleX(-1) skewY(333deg) rotate(151deg)"
    img1Character2=true
    if (imgCharacter==true && img1Character2==true && img2Character3==true && img3Character4==true){
        setTimeout(function() {
            alert("Good job, you defeated the hyenas, and now the cave opening is clear, and we can go through it to the next room.")
            alert("To move to the next room, click the cave opening")
            nextroom()
        }, 500);
    }
}

function img2(){
    alert("It hurt");
    clearInterval(interval2);
    var image = document.getElementById("Character2");
    image.style.transform = "scaleX(-1) skewY(333deg) rotate(200deg)"
    img2Character3=true
    if (imgCharacter==true && img1Character2==true && img2Character3==true && img3Character4==true){
        setTimeout(function() {
            alert("Good job, you defeated the hyenas, and now the cave opening is clear, and we can go through it to the next room.")
            alert("To move to the next room, click the cave opening")
            nextroom()
        }, 500);
    }
}

function img3(){
    alert("Noooo");
    clearInterval(interval3);
    var image = document.getElementById("Character3");
    image.style.transform = "scaleX(-1) skewY(333deg) rotate(279deg)"
    img3Character4=true
    if (imgCharacter==true && img1Character2==true && img2Character3==true && img3Character4==true){
        setTimeout(function() {
            alert("Good job, you defeated the hyenas, and now the cave opening is clear, and we can go through it to the next room.")
            alert("To move to the next room, click the cave opening")
            nextroom()
        }, 500);
    }
}

function appearAndDisappear(elementId, time){
    var hidden = false;

    return setInterval(function(){
        document.getElementById(elementId).style.visibility= hidden ? "visible" : "hidden";
        hidden = !hidden;
    },time);
}
