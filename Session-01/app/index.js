const heading1=React.createElement("h1",{id:"title1",key:'1'},"Namaste");
const heading2=React.createElement("h1",{id:"title2",key:'2'},"React");
const container=React.createElement("div",{id:"container",},[heading1,heading2]);

console.log(container);


const root=ReactDOM.createRoot(document.getElementById("root")); 

root.render(container);