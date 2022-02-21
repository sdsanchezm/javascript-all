class NodeQueue { // this is a regular node
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() { // Take/return the first element of the line 
      return this.first;
    }
    enqueue(value) { // Add an element at the end of the line (because the FIFO logic)
      const newNode = new NodeQueue(value);
      if (this.length === 0) { // validamos si no hay elememtos en el queue - here, we validate if there is no elements in the queue
        this.first = newNode;
        this.last = newNode;
      } else { // if there are elements, then, we proceed to assifned the next parameter to the new node
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
  
      return this;
    }
    dequeue() { // Remove the first element of the line 
      if (!this.first) { // if there are no elements, then return null
        return null;
      }
      if (this.first === this.last) { // if there is only 1 element, then return null
        this.last = null;
      }
      this.first = this.first.next; // make the first element equal to the next one, and garbage collector just removes from memory the previous first element, we lost it.
      this.length--;
  
      return this;
    }
  }
  
  const myQueue = new Queue();
  

  // dequeue method implemented differently:

//   dequeue(){
//     //Eliminar el primer elemento
//     if(this.length === 0){
//         const msg = 'No hay elemento en su Queue';
//         return msg;
//     }else if(this.length === 1){
//         this.first = null;
//         this.last = null;
//     }else{
//         this.first = this.first.next;
//     }
//     this.length--;
//     return this;
// }
