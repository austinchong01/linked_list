// import "./styles.css";
import LinkedList from "./linked.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.prepend("snake");
list.prepend("turtle");

console.log(list.toString());
console.log(list.find("hamster"));