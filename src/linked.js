import Node from "./node";

export default class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    append(value){
        const node = new Node();
        node.value = value;

        if(!this.head){
            this.head = node;
        } else {
            // traverse to end of linked list
            let tail = this.head;
            while(tail.nextNode){
                tail = tail.nextNode;
            }
            tail.nextNode = node;
        }
        this.length += 1;
    }

    // prepend(value){
    //     //add to start of list
    // }
    
    // size(){
    //     //return number of nodes
    // }
    // head(){
    //     //return head
    // }
    // tail(){
    //     //return tail
    // }
    // at(index){
    //     //return node given index
    // }
    // pop(){
    //     //remove last element from list
    // }
    // contains(value){
    //     //returns true if value is in list
    // }
    // find(value){
    //     //return index of node, or null
    // }

    // represent Linked List as "( value ) -> ( value ) -> ( value ) -> null"
    toString(){
        let string = "";
        let node = this.head;
        while(node){
            string += `( ${node.value} ) -> `;
            node = node.nextNode;
        }
        string += " null";
        console.log(string);
    }
}