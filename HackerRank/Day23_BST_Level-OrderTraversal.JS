// Start of function Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}; // End of function Node

// Start of function BinarySearchTree
class BinarySearchTree {
    constructor() {
        this.insert = function (root, data) {
            if (root === null) {
                this.root = new Node(data);

                return this.root;
            }

            if (data <= root.data) {
                if (root.left) {
                    this.insert(root.left, data);
                } else {
                    root.left = new Node(data);
                }
            } else {
                if (root.right) {
                    this.insert(root.right, data);
                } else {
                    root.right = new Node(data);
                }
            }

            return this.root;
        };

        this.inorder= function (node)
        {
                if(node !== null)
                    {
                    this.inorder(node.left);
                    console.log(node.data);
                    this.inorder(node.right);
                }
        };
        this.preorder= function (node)
        {
            if(node !== null){
                console.log(node.data);
                this.preorder(node.left);
                this.preorder(node.right);
            }
            
        };
           

        // Start of function levelOrder
        this.levelOrder = function (root) {

            var queue = [];

            if (root != null) {
                queue.push(root);
            }
            while (queue.length != 0) {
                var current = queue.shift();
                console.log(current.data);
                if (current.left != null) {
                    queue.push(current.left);
                }
                if (current.right != null) {
                    queue.push(current.right);
                }                
            }

        };
       
    }
}; // End of function BinarySearchTree

function main(){
    var tree = new BinarySearchTree();
    var root = null;
    
    var array=[3,5,4,7,2,1];

    var T=array.length;
  
    for (var i = 0; i < array.length; i++) {
        root = tree.insert(root, array[i]);
    }
    
    //tree.preorder(root);
    //tree.inorder(root);
    
    tree.levelOrder(root);
    

}

main();
