class Node { // Create a node, is just an object with the parameters: value, and next. 
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack { // the class Stacks, includes the top, bottom and length properties
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value) { // add a new node at the top of the Stack
      const newNode = new Node(value); // Creates a new Node
      if (this.length === 0) { 
        this.top = newNode;
        this.bottom = newNode; // no need to add a this.top.next because there is only 1 node in this case
      } else {
        const tempPointer = this.top; //like a temporary variable, we create the temp pointer
        this.top = newNode; // assign the new top node
        this.top.next = tempPointer; // top.next is the previous node not the next one THE PREVIOUS NODE
      }
  
      this.length++;
  
      return this;
    }
    pop() {
      if (!this.top) { // validate if there is no nodes in the stack and returns null
        return null;
      }
      if (this.top === this.bottom) {// validate if there is only 1 node in the Stack and makes bottom = null
        this.bottom = null;
      }
      this.top = this.top.next; // save the nodes below the top node
      this.length--; // decrease the length
  
      return this;
    }
  }
  
  const myStack = new Stack();
  