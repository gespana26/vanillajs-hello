/* eslint-disable */
import "bootstrap";
import "./style.css";

//write your code here
function generadorDeExcusas() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let who_r = Math.floor(Math.random() * who.length);
  let action_r = Math.floor(Math.random() * action.length);
  let what_r = Math.floor(Math.random() * what.length);
  let when_r = Math.floor(Math.random() * when.length);

  let cadena = document.getElementById("excuse");
  cadena.innerHTML = `${who[who_r]} ${action[action_r]} ${what[what_r]} ${when[when_r]}`;
}
window.onload = generadorDeExcusas();
