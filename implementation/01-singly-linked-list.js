// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return;
        } else {
            let removedNode = this.head;
            this.head = this.head.next;
            this.length--;
            return removedNode;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if (this.length === 1) {
            let removedNode = this.head;
            this.head = null;
            this.length--;
            return removedNode;
        } else if (!this.length) {
            return;
        } else {
            let curr = this.head;
            while(curr.next.next) {
                curr = curr.next;
            }
            let removedNode = curr.next;
            curr.next = null;
            this.length--;
            return removedNode;

        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        if (this.length) {
            return this.head.value;
        } else {
            return;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if (!this.head) {
            return;
        } else {
            let current = this.head;
            while (current.next) {
                console.log(current.value);
                current = current.next;
            }

            console.log(current.value);
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
