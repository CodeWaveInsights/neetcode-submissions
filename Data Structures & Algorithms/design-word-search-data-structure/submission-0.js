class TrieNode {
  constructor() {
    this.children = new Map(); // char -> TrieNode
    this.isEnd = false;        // word ends here
  }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();

    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let currentNode = this.root;

        for(let ch of word){
            if(!currentNode.children.has(ch)){
                currentNode.children.set(ch, new TrieNode());
            }
            currentNode =currentNode.children.get(ch);
        }
        return currentNode.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (node, index) =>{
            if(index === word.length){
                return node.isEnd === true;
            }
            const ch = word[index];
            //case -I normal character
            if(ch !=="."){
                if(!node.children.has(ch)) return false;

                return dfs(node.children.get(ch), index+1)
            }

            //case - II wild character - try every possible child

            for(let childNode of node.children.values()){
                if(dfs(childNode,index+1)){
                    return true;
                }
            }
            return false;
        }
        return dfs(this.root,0);
    }
}
