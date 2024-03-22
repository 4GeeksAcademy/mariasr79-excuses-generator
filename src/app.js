/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
const obternerElementoAleatorio = listado => {
  let elemento = "";
  elemento = listado[Math.floor(Math.random() * listado.length)];
  return elemento;
};
const alCargarLaPagina = () => {
  let excusa = document.querySelector("#excuse");
  excusa.innerHTML =
    obternerElementoAleatorio(who) +
    " " +
    obternerElementoAleatorio(action) +
    " " +
    obternerElementoAleatorio(what) +
    " " +
    obternerElementoAleatorio(when);
};
window.onload = alCargarLaPagina();
