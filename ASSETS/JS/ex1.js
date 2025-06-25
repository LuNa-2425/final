//EXERCÍCIO 1
alert("Olá ¡mundo!");

// EXERCÍCIO 2
function chamar(){
    var nome = prompt("Identifique-se");
  alert("Olá " + nome);
}

// EX 3
{
var a = "20";
var b = a * 2;     // b = 40
var c = a / 2;     // c = 10
var d = a - 2;     // d = 18
var e = a + 2;     // e = 202 ??? ; O sinal "+" é usado para concatenar uma string com um elemento em outro formato, portanto aqui ao invés de somar ele concatenou "20" com 2.
function exiba(){
  alert("e: " + e);  
}}

/* Operações envolvendo strings e números */
{var a = "20";
var b = a * 2;     // b = 40
var c = a / 2;     // c = 10
var d = a - 2;     // d = 18
var e = a + 2;     // e = 202
var f = Number(a); // transforma a string em elementos numéricos. 
var g = f + 2;     // g = 22
function exibir(){
    alert( g);
}}

//___________________________

{
var fruta = "Banana";
var preco = 3.50;
var levar = true;
var novoValor = novoValor;
function mostre(){
alert(fruta + " " + preco + " " + levar + " " + novoValor);
}}