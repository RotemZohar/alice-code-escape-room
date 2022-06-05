imgCharacter1=false
img1Character2=false
img2Character3=false
img3Character4=false
imgCharacter=4
//Character.delay(2000).fadeOut(3000);  
function img(){
    alert("Aya");
    imgCharacter=true
    if (imgCharacter==true && img1Character2==true && img2Character3==true && img3Character4==true){
        alert("Good job, you defeated the hyenas, and now the cave opening is clear, and we can go through it to the next room.")
        alert("To move to the next room, click the cave opening")
        nextroom()
    }
    

}

function img1(){
    alert("Ouch");
    img1Character2=true
    if (imgCharacter==true && img1Character2==true && img2Character3==true && img3Character4==true){
        alert("Good job, you defeated the hyenas, and now the cave opening is clear, and we can go through it to the next room.")
        alert("To move to the next room, click the cave opening")
        nextroom()
    }
}

function img2(){
    alert("It hurt");
    img2Character3=true
    if (imgCharacter==true && img1Character2==true && img2Character3==true && img3Character4==true){
        alert("Good job, you defeated the hyenas, and now the cave opening is clear, and we can go through it to the next room.")
        alert("To move to the next room, click the cave opening")
        nextroom()
    }
}

function img3(){
    alert("Noooo");
    img3Character4=true
    if (imgCharacter==true && img1Character2==true && img2Character3==true && img3Character4==true){
        alert("Good job, you defeated the hyenas, and now the cave opening is clear, and we can go through it to the next room.")
        alert("To move to the next room, click the cave opening")
        nextroom()
    }
}