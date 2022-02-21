
// to have an idea, this is the general structure
// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }


class Node { // this is a generic Node, it shoul contain only a value and a next 
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList { // this is the definition of a linked list using classes
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){ // the append method, allows to enter a new value into the list. 
        const newNode = new Node(value);
        this.tail.next = newNode; // here the new node is assigned
        this.tail = newNode; // is like tail and tail.next are kind of the same. 
        this.length++; // length increase by 1

        return this;
    }

    prepend(value) { // this method, add a new node to the beggining of the list (opposite to the append)
        const newNode = new Node(value); // create a new node
        newNode.next = this.head; // connect to the head
        this.head = newNode; // pointing the head to the newNode
        this.length++; // increase lenght
        return this;
    }

    insert(index, value) { // this method, allows to enter a value into the list different from head or tail -for example in the midle-
        if (index >= this.length) { // validates if the index is more than the actual size of the list and proceed to add it at the end of the list
          return this.append(value);
        }
    
        const newNode = new Node(value); // Create a node
        const firstPointer = this.getTheIndex(index - 1); //
        const tempPointer = firstPointer.next; // create a temporary pointer, otherwise the garbage collector make dissapear the previous pointer
        firstPointer.next = newNode; // pointing to the newNode 
        newNode.next = tempPointer; // pointing the previous node to the .next
    
        this.length++; // increasing the length
    
        return this;
      }
    
      getTheIndex(index) { // just obtaining an index in our list
        let counter = 0;
        let currentNode = this.head;
    
        while (counter !== index) {
          currentNode = currentNode.next;
          counter++;
        }
    
        return currentNode;
      }
}


let myLinkedList = new MySinglyLinkedList(1);


