class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
       if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight})
        this.adjacencyList[vertex2].push({node:vertex1,weight})
    }
}


const graphobj = new WeightedGraph();
graphobj.addVertex("A")
graphobj.addVertex("B")
graphobj.addVertex("C")
graphobj.addEdge("A","B",7)
graphobj.addEdge("B","C",5)
graphobj.addEdge("C","A",10);
console.log(graphobj)