/* eslint-disable */
import "bootstrap";
import "./style.css";

//write your code here
function nada() {
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
  let var2 = 0;
  var2 = Math.floor(Math.random() * 5);
  let who_r = who[var2];
  let action_r = action[var2];
  let what_r = what[var2];
  let when_r = when[var2];
  let cadena = document.getElementById("excuse");
  //let unida =
  cadena.innerHTML = who_r + " " + action_r + " " + what_r + " " + when_r;
}
window.onload = nada();
