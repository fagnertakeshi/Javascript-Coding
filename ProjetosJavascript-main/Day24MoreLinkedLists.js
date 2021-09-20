function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

    this.removeDuplicates=function(head){
      //Write your code here
      let actual; 
      
      if (head===null)
        return head;
      else
        actual=head;        
        while(head.next!=null){
                if (actual.data===(head.next).data){                    
                    actual=actual.next.next;    
                }
                else
                    actual=actual.next;                   
                
        }
        
        return head;
        
    }

	this.insert=function(head,data){
        var p=new Node(data);
        if(head==null){
            head=p;
        }
        else if(head.next==null){
            head.next=p;
        }
        else{
            var start=head;
            while(start.next!=null){
                start=start.next;
            }
            start.next=p;
        }
        return head;
        
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    head=mylist.removeDuplicates(head);
    mylist.display(head);
}		