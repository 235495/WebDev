function changeText() {
 
    
    
    document.getElementById("textChange").innerHTML ="Thanks for liking my Webpage";
}

function challengeStart() {
 
    
    
    document.getElementById("challenge").innerHTML ="Challenge Active";
}

var space = " ";
var pos = 0;
var msg = "Web Development User #17";

function Scroll() {
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();