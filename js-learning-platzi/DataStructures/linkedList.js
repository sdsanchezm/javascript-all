// Esta es la estructura basica: 
// 1-- > 2-- > 3-- > 4-- > 5-- > null;
// Una linked list, es basicamente una 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
