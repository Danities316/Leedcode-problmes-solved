/*
Breadth-First Search Algorithm Pseudocode

Input: source as the source node 
BFS (Graph, source)
let Q be queue.
Q.enqueue( source )
mark source as visited
while ( Q is not empty)
v = Q.dequeue( )
for all neighbors w of v in Graph Graph
if w is not visited
Q.enqueue( w )
mark w as visited
*/



var Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};

var doBFS = function(graph, source) {
    var bfsInfo = [];

    for (var i = 0; i < graph.length; i++) {
	    bfsInfo[i] = {
	        distance: null,
	        predecessor: null };
    }

    bfsInfo[source].distance = 0;

    var queue = new Queue();
    queue.enqueue(source);

    // Traverse the graph
    while(!queue.isEmpty()){
        //pop queue item into vertex variables
       var vertex = queue.dequeue();

       //iterate through vertex subarray
       for(var v = 0; v < graph[vertex].length; v++){
        //set neighbour var to be the current index iteration  
        var neighbor = graph[vertex][v];
           //console.log(d)
           //checck if neighbour has been visited
        if(bfsInfo[neighbor].distance === null){
            //add 1 to the distance of current vertex, then set for neighbour
            bfsInfo[neighbor].distance = bfsInfo[neighbor].distance + 1;
            //origin for the current vertex
            bfsInfo[v].predecessor = vertex;
            queue.enqueue(neighbor);
        }
       }

    }
    
    // As long as the queue is not empty:
    //  Repeatedly dequeue a vertex u from the queue.
    //  
    //  For each neighbor v of u that has not been visited:
    //     Set distance to 1 greater than u's distance
    //     Set predecessor to u
    //     Enqueue v
    //
    //  Hint:
    //  use graph to get the neighbors,
    //  use bfsInfo for distances and predecessors 
    
    return bfsInfo;
};


var adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
    ];
var bfsInfo = doBFS(adjList, 3);
for (var i = 0; i < adjList.length; i++) {
    console.log("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
}

/*
Program.assertEqual(bfsInfo[0], {distance: 4, predecessor: 1});
Program.assertEqual(bfsInfo[1], {distance: 3, predecessor: 4});
Program.assertEqual(bfsInfo[2], {distance: 1, predecessor: 3});
Program.assertEqual(bfsInfo[3], {distance: 0, predecessor: null})
*/