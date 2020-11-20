function Stack() {
    this.first = null
    this.last = null
    this.size = 0
}

function Node(value) {
    this.value = value
    this.next = null
}

Stack.prototype.push = function (val) {
    let node = new Node(val)

    if (!this.first) {
        this.first = node
        this.last = node
    }
    else {
        this.last.next = node
        this.first = node
    }
    this.size++    
    return this.size
}

Stack.prototype.pop = function () {
    const temp = this.first
    this.last = null
    this.size--    
    return temp.value
}

Stack.prototype.peek = function () {
    return this.first.value
}