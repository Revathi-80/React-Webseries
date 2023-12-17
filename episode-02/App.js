const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a heading"),
    React.createElement("h2", {}, "I am a heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a heading"),
    React.createElement("h2", {}, "I am a heading 2"),
  ]),
]);

const heading = React.createElement("h1", { id: "heading" }, "Hello World");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
