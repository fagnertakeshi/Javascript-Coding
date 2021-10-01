
class Node
{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree
{
    constructor(){
        this.root=null
    }
    insert(pnode, data)
    {
        //Creating a node and initialising
        //with data
        var newNode=new Node(data);

        //root is null then node will
        //be added to the tree and made root

        if (pnode===null)
            this.root=newNode;
        else
            //find the correct position in the
            // tree and add the node
            this.insertNode(pnode,newNode)
    
            return this.root;
    }
    
    //Method to insert a node in a tree
    //it moves over the tree to find the location
    //to insert a node with a given data
    insertNode(node,newNode)
{
    //if the data is less than the node
    //data move left of the tree
    if (newNode.data < node.data)
    {   
        //if left is null insert node here
        if (node.left===null)
            node.left=newNode;
        else
            this.insertNode(node.left,newNode)
    }
    else
        if (node.right===null)
                node.right=newNode;
        else
            this.insertNode(node.right,newNode);
}
    //helper method that calls the removeNode with a given data
    remove(data)
    {
        //root is re-initialized with 
        //root of a modified tree
        this.root = this.removeNode(this.root,data);

    }
    //Method to remove node with a 
    //given data
    //it recur over the tree to find data and removes it
    removeNode(node,key)
    {
        //if the root is null then tree is empty
        if(node===null)
            return null;
        
        //if data to be delete is less than
        //roots data then move to left subtree
        else if (key< node.data)
        {
            node.left=this.removeNode(node.left,key);
            return node;
        }
        // if data to be delete is greater than
        //roots data then move to right subtree
        else if (key>node.data)
        {
            node.right=this.removeNode(node.right,key);
            return node;
        }
        //if data is similar to the root's DATA
        //then delete this node
        else
        {
         //deleting  node with no childen
         if ( node.left===null && node.right===null)
         {
             node=null;
             return node;
         }
         //deleting node with one children
         if (node.left===null)
         {
             node=node.right;
             return node;
         }
         else if (node.right===null)
         {
             node=node.left;
             return node;
         }
         // Deleting node with two children
         // minimum node of the right subtree
         // is stored in aux
         var aux= this.findMinNode(node.right);
         node.data=aux.data;
         node.right=this.removeNode(node.right,aux.data);
         return node;
            
        }
    }
    //finds the minimum node in tree
    //searching starts from given node
    findMinNode(node)
    {
        // if left of a node is null
        // then it must be minimum node
        if (node.left=null)
            return node;
        else
            return this.findMinNode(node.left);

    }
    getRootNode()
    {
        return this.root;

    }
    inorder(node)
{
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}
    preorder(node)
{
    if(node !== null)
    {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}
    getHeight(root)
{
    if( root === null ){
        return -1;
    }
    else{
        return 1 + Math.max( this.getHeight(root.left), this.getHeight(root.right) );
    }
}

}

 
var tree = new BinarySearchTree();

var root = null;
    

var values = [3,5,2,1,4,6,7]

for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
}



//tree.inorder(root);
console.log(tree.getHeight(root));


/*
var root = tree.getRootNode();
             
// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);
*/


//console.log(tree);
