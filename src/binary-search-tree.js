const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addIn(this.rootNode, data);

    function addIn(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addIn(node.left, value);
      } else {
        node.right = addIn(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return search(this.rootNode, data);

    function search(node, value) {
      if (!node) {
        return false
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data ?
      search(node.left, value) :
      search(node.right, value);
    }
  }


  find(data) {
    if (!this.has(data)) {
      return null;
    }
    if (this.has(data)) {
      return new Node(data);
    }
  }

  remove(data) {
    this.rootNode = removeIn(this.rootNode, data);

    function removeIn(node, value) {
      if (!node) {
        return false;
      }

      if (value < node.data) {
        node.left = removeIn(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeIn(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        };

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        } 

        node.data = minFromRight.data;

        node.right = removeIn(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    let current = this.rootNode;

    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    let current = this.rootNode;

    while (current.right) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};