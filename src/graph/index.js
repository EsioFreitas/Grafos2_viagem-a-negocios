import PriorityQueue from './PriorityQueue';

export default class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(id) {
    if (!this.adjacencyList[id]) {
      this.adjacencyList[id] = {};
    }
  }

  addEdge(vert1, vert2, weight) {
    this.adjacencyList[vert1][vert2] = weight;
  }
  Dijkstras(start, finish) {
    const costFromStartTo = {};
    const checkList = new PriorityQueue();
    const prev = {};

    let current;
    let result = [];
    for (let node in this.adjacencyList) {
      if (node === start) {
        costFromStartTo[node] = 0;
        checkList.enqueue(node, 0);
      } else {
        costFromStartTo[node] = Infinity;
      }
      prev[node] = null;
    }
    while (checkList.values.length) {
      current = checkList.dequeue().value;
      if (current === finish) {
        while (prev[current]) {
          result.push(current);
          current = prev[current];
        }
        break;
      } else {
        for (let neighbor in this.adjacencyList[current]) {
          let costToNeighbor =
            costFromStartTo[current] + this.adjacencyList[current][neighbor];
          if (costToNeighbor < costFromStartTo[neighbor]) {
            costFromStartTo[neighbor] = costToNeighbor;
            prev[neighbor] = current;
            checkList.enqueue(neighbor, costToNeighbor);
          }
        }
      }
    }
    return result.concat(current).reverse();
  }
}
