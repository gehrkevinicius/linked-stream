import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    this.size++;
    let nextNode = new Node(value);

    if (this.head === null) {
      this.head = nextNode;
      return;
    }

    let latestNode = this.head;
    while (latestNode.next !== null) {
      latestNode = latestNode.next;
    }
    latestNode.next = nextNode;
  }

  pop() {
    let latestNode = this.head;

    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      return value;
    }

    while (latestNode.next.next !== null) {
      latestNode = latestNode.next;
    }

    const value = latestNode.next.value;
    latestNode.next = null;
    return value;
  }

  print() {
    let valuesToPrint = "";
    let latestNode = this.head;
    while (latestNode !== null) {
      const comma = latestNode.next ? ", " : "";
      valuesToPrint += `${latestNode.value}${comma}`;
      latestNode = latestNode.next;
    }
    console.log(valuesToPrint);
  }

  /*
  1) Este método deve retornar o valor de um node pelo índice,
  começando pelo 0. Caso não exista elemento no índice,
  devolva null.
  */
  getAt(index) {}

  /* 2) Retorna o tamanho da lista encadeada */
  getSize() {}

  /* 3) Este método deve remover um elemento pelo
  índice e retornar o seu valor */
  removeAt(index) {}

  /* 4) Este método deve procurar um elemento pelo valor e
  retornar o primeiro índice encontrado. Caso o valor
  não exista, retorne -1 */
  search(value) {}

  /* 5) Este método deve procurar um elemento pelo valor e
  retornar o último índice encontrado. Caso o valor
  não exista, retorne -1 */
  searchLast(value) {}

  /* 6) Este método deve retornar um vetor com
  os valores da lista encadeada */
  toArray() {}
}
