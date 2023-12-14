const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(elem) {
    if (this.length === 0) {
      this.head = new ListNode(elem);
    }  else {
      let current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = new ListNode(elem);
    }
    this.length++
  }

  remove(elem) {
    let current = this.head;
    let prev = null;

    while (current.value != elem) {
      prev = current;
      current = current.next;
    };

    prev.next = current.next;
    this.length--;
  }
}

function removeKFromList(l, k) {
  let current = l;
  let prev = null

  while(current) {
    if (current.value === k) {
      if (prev) {
        prev.next = current.next
      } else {
        l = current.next;
      }
    } else {
      prev = current;
    }
    current = current.next
  }

  return l;
}

module.exports = {
  removeKFromList
};
