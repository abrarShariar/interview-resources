class Node {
  constructor (val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor () {
    this.root = null;
  }

  insert (val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current !== null) {
      if (val > current.value) {
        // go for right
        if (current.right !== null) {
          current = current.right;
        } else {
          current.right = node;
          break;
        }
      }
      else if (val < current.value) {
        // go for left
        if (current.left !== null) {
          current = current.left;
        } else {
          current.left = node;
          break;
        }
      }
    }
  }

  // recursively lookup
  lookup (pointer, key) {
    if (pointer === null) {
      return -1;
    }
    if (pointer.value === key) {
      return 1;
    }

    if (key > pointer.value) {
      return this.lookup(pointer.right, key);
    }
    else {
      return this.lookup(pointer.left, key);
    }
  }


  // recursively traverse
  traverse (pointer) {
    if (pointer === null) {
      return;
    }
    console.log(pointer.value);
    this.traverse(pointer.left);
    this.traverse(pointer.right);
  }

}

let bst = new BST();
bst.insert(9);
bst.insert(20);
bst.insert(21);
bst.insert(23);
bst.insert(4);
bst.insert(1);

console.log(bst.lookup(bst.root, 4));
if (bst.lookup(bst.root, 9) === 1) {
  console.log("FOUND");
}

// bst.traverse(bst.root);

// console.log(bst.root.value);

// console.log(bst.root.left.value);
// console.log(bst.root.right.value);
// console.log(bst.root.left.left.value);
// console.log(bst.root.left.right.value);
