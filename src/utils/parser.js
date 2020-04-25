let XLSX = require("xlsx");
let f = XLSX.readFile("friends_data.xlsx");
let sheetNames = f.SheetNames;
let fs = require("fs");
let out = [];
for (var i = 0; i < sheetNames.length; i++) {
  let sheet = f.Sheets[sheetNames[i]];
  let json = XLSX.utils.sheet_to_json(sheet);
  for (var j = 0; j < json.length; j++) {
    out.push(json[j]);
  }
}
let graph = {
  nodes: [],
  edges: [],
};
for (var i = 0; i < out.length; i++) {
  let node = {
    id: out[i].Node,
    city: out[i].CITY,
  };
  graph.nodes.push(node);
  let edge = {
    from: out[i].Connection,
    to: out[i].Node,
  };
  graph.edges.push(edge);
}
graph = JSON.stringify(graph);
fs.writeFile("./graph.json", graph, function (err) {
  if (err) console.log(err);
});
