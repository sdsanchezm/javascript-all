// Graph Class definition
class Graph {
    constructor() { // this is the constructor method

      this.nodes = 0; // 0 by default
      this.adjacentList = {};

    }
    addVertex(node) {

      this.adjacentList[node] = [];
      this.nodes++; // increase the number of nodes

    }
    addEdge(node1, node2) {

      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);

    }
  }
  
  // Instanciating the myGraph object based on Graph
  const myGraph = new Graph();