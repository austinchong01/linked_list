import Node from "./node.js";

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
            // traverse to tail
            let tail = this.head;
            while(tail.nextNode)
                tail = tail.nextNode;

            tail.nextNode = node;
        }
        this.length += 1;
    }

    prepend(value){
        const node = new Node();
        node.value = value;

        let prevHead = this.head;
        this.head = node;
        node.nextNode = prevHead;

        this.length += 1;
    }

    size(){
        return this.length;
    }

    getHead(){
        if(!this.head){
            return null;
        }
        return this.head.value;
    }

    tail(){
        let tail = this.head;
        if(!tail){
            return null;
        }
        while(tail.nextNode)
            tail = tail.nextNode;
        return tail.value;
    }

    at(index){
        let node = this.head;
        for(let i = 0; i < this.length; i+=1){
            if(i === index){
                return node.value;
            } else {
                node = node.nextNode;
            }
        }
        return null;
    }

    pop(){
        let tail = this.head;

        // if linked list is size 0
        if(!tail)
            return null;

        // if linked list is size 1
        if(!tail.nextNode){
            this.head = null;
            this.length = 0;
            return null;
        }

        // linked list is at least size 2
        let prev = tail;
        tail = tail.nextNode;
        while(tail.nextNode){
            tail = tail.nextNode;
            prev = prev.nextNode;
        }
        prev.nextNode = null;
    }

    contains(value){
        let node = this.head

        // if linked list is size 0
        if(!node)
            return false;

        while(node){
            if(node.value === value)
                return true;
            node = node.nextNode;
        }
        return false;
    }

    find(value){
        //return index of node, or null
        let node = this.head;
        for(let i = 0; i < this.length; i+=1){
            if(node.value === value){
                return i
            } else {
                node = node.nextNode;
            }
        }
        return null;

    }

    toString(){
        let string = "";
        let node = this.head;
        while(node){
            string += `( ${node.value} ) -> `;
            node = node.nextNode;
        }
        string += " null";
        return string;
    }
}