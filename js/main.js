var x =[
{
quote:"The best revenge is massive success.",
name:"Frank Sinatra"
},
{
quote:" Be yourself; everyone else is already taken.",
name:" Oscar Wilde"
},
{
quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
name:" Marilyn Monroe"
},
{
quote:"So many books, so little time.",
name:"Frank Zappa "
}

]


var btn = document.getElementById("genrate-quote");
btn.onclick= function(){

var random = Math.floor(Math.random()* x.length);
var y = x[random];
document.getElementById("quote").innerHTML = y.quote;
document.getElementById("author").innerHTML ="Author : "+ y.name;


}