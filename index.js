var lowercase, uppercase
function shout(string){
 uppercase = string.toUpperCase();
 string = uppercase;
 return uppercase;
}
function whisper(string){
  lowercase = string.toLowerCase()
  string = lowercase
  return lowercase 
}
function logWhisper(string){
  lowercase = string.toLowerCase()
  string = lowercase
  console.log(lowercase)
}
function sayHiToGrandma(string){
  if(string.toLowerCase()=== string){
  return `I can't hear you`
}
if(string)