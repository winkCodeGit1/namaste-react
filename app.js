// const heading = React.createElement("h1", { id: "heading" }, "Hi suman");
{
    /* <div id="parent">
  <div id="child">
    <h1>i am h1</h1>
    <h2>i am h2</h2>
  </div>
</div> */
}

const parent = React.createElement(
    "div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "i am h1"),
        React.createElement("h2", {}, "i am h2"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "i am h1"),
        React.createElement("h2", {}, "i am h2"),
    ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);