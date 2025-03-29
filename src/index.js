// import "./styles.css";
import LinkedList from "./linked.js";

const list = new LinkedList();

list.append("dog", "brown");
list.append("cat", "white");
// list.append("parrot");
// list.append("hamster");
list.prepend("snake", "green");
// list.prepend("turtle");

console.log(list.toString());
console.log(list.find("snake"))
// console.log(list.at(0));
// console.log(list.find("dog"));