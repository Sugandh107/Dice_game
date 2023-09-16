
function change(){
    var rn1=Math.floor(Math.random()*6+1)

    var imagenumber1="./images/dice"+rn1+".png"

    var dice=document.querySelectorAll("img")[0]
    dice.setAttribute("src",imagenumber1)


    var rn2=Math.floor(Math.random()*6+1)
    var imagenumber2="./images/dice"+rn2+".png"

    var dice=document.querySelectorAll("img")[1]
    dice.setAttribute("src",imagenumber2)

    if (rn1>rn2){
        document.querySelector('h1').innerHTML="Player 1 Wins 🚩"
    }
    else if (rn2>rn1){
        document.querySelector('h1').innerHTML="Player 2 Wins 🚩"
    }
    else{
        document.querySelector('h1').innerHTML="Draw 🚩"
    }
}

