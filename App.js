const parent=React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"},[
    React.createElement("h1", {}, "hello from react h1"), 
    React.createElement("h1", {}, "hello from react h1")]),

    React.createElement("div", {id:"child2"},
    React.createElement("h1", {}, "hello from react h1"), 
    React.createElement("h1", {}, "hello from react h1"))]);
    
        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);