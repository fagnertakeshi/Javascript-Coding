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
        this.BreadthFirstSearch= function (rootNode, searchValue)  {
            // make a queue array
            let queue = [];
            // populate it with the node that will be the root of your search
            queue.push(rootNode);
        
            // search the queue until it is empty
            while (queue.length > 0) {
            // assign the top of the queue to variable currentNode
                let currentNode = queue[0];
                console.log("Current node is:" + currentNode.data);
        
                // if currentNode is the node we're searching for, break & alert
                if (currentNode.data === searchValue) {
                    console.log("Found it!");
                    return;
                }
        
                // if currentNode has a left child node, add it to the queue.
                if (currentNode.left !== null) {
                    queue.push(currentNode.left);
                }
        
                // if currentNode has a right child node, add it to the queue.
                if (currentNode.right !== null) {
                    queue.push(currentNode.right);
                }
                // remove the currentNode from the queue.
                queue.shift();	
            }
            console.log("Sorry, no such node found :(");	
        }
       
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
    
   
   console.log(root);

    tree.BreadthFirstSearch(root,1)
    tree.levelOrder(root);    

}

main();
