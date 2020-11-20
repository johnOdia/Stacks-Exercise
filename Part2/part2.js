//QUESTION: given a doubly linked list implement a stack

const DoublyLinkedList = require('./doublyLinkedList')

class Stack {
    constructor() {
        this.Stack = new DoublyLinkedList()
    }
    push(value) {
        return this.Stack.push(value)
    }
    pop() {
        return this.Stack.pop()
    }
    peek() {
        return this.Stack.tail.val
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.pop()
console.log(stack.peek());