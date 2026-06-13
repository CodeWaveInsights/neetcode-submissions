class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let currentNode = this.root;

        for (let ch of word) {
            if (!currentNode.children.has(ch)) {
                currentNode.children.set(ch, new TrieNode());
            }
            currentNode = currentNode.children.get(ch);
        }

        currentNode.isEnd = true;
    }

    search(word) {
        let currentNode = this.root;

        for (let ch of word) {
            if (!currentNode.children.has(ch)) {
                return false;
            }
            currentNode = currentNode.children.get(ch); // ✅ FIX
        }

        return currentNode.isEnd === true;
    }

    startsWith(prefix) {
        let currentNode = this.root;

        for (let ch of prefix) {
            if (!currentNode.children.has(ch)) {
                return false;
            }
            currentNode = currentNode.children.get(ch); // ✅ FIX
        }

        return true;
    }
}
