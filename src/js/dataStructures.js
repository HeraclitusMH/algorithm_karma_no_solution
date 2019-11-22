class LinkNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pushList = (val) => {
        var newNode = new LinkNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    popList = () => {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        console.log(current.next);
        while(current.next){
           // console.log(current.next);
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        return current;
    }
}