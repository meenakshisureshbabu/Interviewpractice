class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2)
        if(this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1)

    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1)

    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    depthFirst(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) {return null}
            visited[vertex] = true;
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start)
        return result
    }


    breadthfirst(start){
        const queue = [start];
        const result = [];
        const visited = {}
        let currentVertex;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }
        return result;

    }
}





g = new Graph();
g.addVertex("Chennai")
g.addVertex("Madurai")
g.addVertex("Trichy")
g.addVertex("Trivandrum")
g.addEdge("Chennai","Madurai")
g.addEdge("Trichy","Chennai")
g.addEdge("Madurai","Trichy")
g.addEdge("Trivandrum","Chennai")
g.addEdge("Trivandrum","Madurai")

console.log(g.depthFirst("Chennai"))