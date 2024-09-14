var institude = prompt("enter your interst of any website");
var timing = prompt("whats your watching timing if match so you allowed!");
var assigment = prompt("wtach movies and seriece?");
var attendence = 80;
if(
    institude === "netflix" &&
    timing === "7" &&
    assigment === "yes" &&
    attendence >= 80
)
{
    alert("your are allowed")
} 
else{
    alert("not allowed")
}