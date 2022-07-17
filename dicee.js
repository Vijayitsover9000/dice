var r1 =Math.floor(Math.random()*6 +1) ;
var r2 =Math.floor(Math.random()*6 +1) ;
document.querySelectorAll("img")[0].setAttribute("src" , "images/dice"+r1+".png");
document.querySelectorAll("img")[1].setAttribute("src" , "images/dice"+r2+".png");
if(r1 > r2)
{
    document.querySelector("h1").textContent = "🎉Player 1 wins";
}
else if(r2 >r1 )
{
    document.querySelector("h1").textContent = "Player 2 wins🎉";
}
else{
    document.querySelector("h1").textContent = "It's a Draw";
}