class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(null, null);
        this.tail = new Node(null, null);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

     _addNodeToFront(node){
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }

    _removeNode(node){
        const prevNode = node.prev;
        const nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

    }

    _moveToFront(node){
        this._removeNode(node);
        this._addNodeToFront(node);
    }

    _evictLRU(){
        const lruNode = this.tail.prev;
        this._removeNode(lruNode);
        this.map.delete(lruNode.key);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this._moveToFront(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Key already exists → update and move to front
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this._moveToFront(node);
            return;
        }

        // Create new entry
        const newNode = new Node(key, value);
        this.map.set(key, newNode);
        this._addNodeToFront(newNode);

        // Evict if over capacity
        if (this.map.size > this.capacity) {
            this._evictLRU();
        }
     }
}
