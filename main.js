
var el = document.querySelector("#texto");
var texto = "Eu sou Programadora FullStack!"
var interval = 200;
function showtext(el, texto, interval) {
  var char = texto.split("").reverse();
  var typer = setInterval(function() {
    if (!char.length) {
        return clearInterval(typer)
    }
    var next = char.pop();
    el.innerHTML += next;
  }, interval);
  
}
showtext(el, texto, interval);