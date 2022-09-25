/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = [
    "A clown",
    "A racoon",
    "A dog",
    "A moose",
    "A firefighter",
    "A doctor"
  ];
  let action = ["took my", "threw my", "ate my", "swallowed my", "stole my"];
  let what = ["homework", "car keys", "drivers license", "sunglasses", "phone"];
  let when = [
    "this morning",
    "last night",
    "as I was about to leave my house",
    "yesterday"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
