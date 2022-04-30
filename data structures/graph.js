// different representations and operations on a graph

// adjacency list
edges = [
	[1,3],
	[2,3,4],
	[0],
	[],
	[2,5],
	[]
]

///////
// dfs
///////
// for each node, trace paths through nodes, returning if start node is detected
for(node, neighbors of edges.entries()){
  // TODO
}

function cycleInGraph(edges) {
  // use 2 pointers

  // each pointer maintains a list of unvisited branches and
  // a set of dead-ends

  // they eventually end up on the same node
  return false;
}








// adjacency matrix
// adjacency set

// optional: generator of various trees
// spares
// dense
// connected
// etc.