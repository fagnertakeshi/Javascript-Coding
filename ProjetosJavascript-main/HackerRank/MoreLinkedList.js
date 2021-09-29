


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Solution {
    constructor() {

        this.removeDuplicates = function (head) {
            //Write your code here
            
            if (head == null || head.next == null){
                return head;
            }
            if (head.data == head.next.data){
                head.next = head.next.next;
                this.removeDuplicates(head);
            }else{
                this.removeDuplicates(head.next);
            }
            return head;

        };
            //teste2
        this.insert = function (head, data) {
            var p = new Node(data);
            if (head == null) {
                head = p;
            }
            else if (head.next == null) {
                head.next = p;
            }
            else {
                var start = head;
                while (start.next != null) {
                    start = start.next;
                }
                start.next = p;
            }
            return head;

        };

        this.display = function (head) {
            var start = head;
            while (start) {
                console.log(start.data + " ");
                start = start.next;
            }
        };
    }
}



function main(){
    //var T=parseInt(readLine());

    var head=null;
    var mylist=new Solution();
    
    var array=[3,9,9,11,11,11,11,89,89,100,100,101,102,103,108,200,250,250,250,250];
    var T=array.length;
    
    for(i=0;i<T;i++){
        //var data=parseInt(readLine());
        var data=parseInt(array[i]);
        head=mylist.insert(head,data);
    }
    

    head=mylist.removeDuplicates(head);
    
    mylist.display(head);
}

main();



