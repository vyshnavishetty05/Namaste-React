# Is JSX mandatory for React?
Ans : No, it’s not mandatory but its good practice and recommended by react. But it will definitely make developer life easy. With the help of JSX developer can make user friendly code.

# Is ES6 mandatory for React?
ANS : No, but is highly recommendable, with the help of ES6 we can write complex code in readable and more meaning format.

# {TitleComponent} vs {&lt;TitleComponent/&gt;} vs {&lt;TitleComponent&gt;&lt;/TitleComponent&gt;} in JSX?
ANS : 
{TitleComponent}…this will work as react element you can pass any {var || expression || any js code in it}
{<TitleComponent/>}…with the help of this code we can call react functional component.
{<TitleComponent> <TitleComponent/>}…you can return number of children list in it or call nested functional component...with the help of this syntax we can write multiple line code in it…
Eg
```python
{<TitleComponent> 
<Header />
 <Body />
 <Footer/>
<TitleComponent/>}
```

# How can I write comments in JSX?
Block comment {/* */}

# What is <React.Fragment></React.Fragment> and <></> ?
Ans:
Fragments let you group things without leaving any trace in the browser HTML tree.

Its a component exported by React. Fragments let you group a list of children without adding extra nodes to the DOM. If you don’t want to created extra div inspite of your root parent or any other new div or tag then you can used <React.Fragment>. This will can only ONE PARENT. This will work as empty tag
Eg 
 ```python
const testFrag = () => {
  return (
    <React.Fragment key=’test1’>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    </React.Fragment>
  )
 }
```

Or you can work like this… but in the below syntax you can’t pass attribute…like className or style but you can add key attribute for both eg

 ```python
const testFrag = () => {
  return (
    < key=’emptyTest’>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    </>
  )
 }
```

In your browser if you check code this will look like this in console
```python
<div id=”root”>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>	
</div>
```
 
## What is Virtual DOM?

- It is representation of your Actual Dom. Representation of actual DOM stored in memory in the form of tree and is always synced with real DOM. The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.  The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.
- Virtual DOM is a virtual representation of the Document Object Model that is kept as temporary memory storage for all the changes brought to the user interface and is synced with the real DOM by a library such as ReactDOM.

- In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

Reference Link: https://atulkawasthi.medium.com/what-is-the-dom-virtual-dom-afea2de36a00

## What is Reconciliation in React?
 
- Reconciliation means that react uses diff algorithms to find out difference between trees (real DOM and virtual DOM)
and just update the changed portion of UI from virtual DOM to real DOM.

## What is React Fiber?

- React Fiber is the new reconciliation engine in React 16.
- Its new Reconciliation engine which is responsible for diff algorithm.  Its main goal is to enable incremental rendering of the virtual DOM.
Ref Link: https://github.com/acdlite/react-fiber-architecture

## Why we need keys in React? When do we need keys in React? 

- Key is used to uniquely identify our react elements so that the reconciliation can easily find the new added element
   and only re-render that elements intead of re-rendering all the similar elements.
- We need Key in react when we have multiple elements of same html tag.
- Keys are necessary to improve performance of your React app.

 ```python
const numbers = [
  {
    id: 1,
    name: 'XYZ'
  },
  {
    id: 2,
    name: 'uiop'
  },
  {
    id: 3,
    name: 'ABC'
  }
];
const ListItems = numbers.map((item) =>
  <li key={item.id}>
    {item.name}
  </li>
);
```

## Can we use index as keys in React?

- Yes, but that is the last option and it is not good practices.  React recommends that you do not use indexes as keys, since it could impact performance negatively and could lead to some unstable component behaviour.

- To help you decide, Three conditions which these examples have in common:

1) the list and items are static–they are not computed and do not change;
2) the items in the list have no ids;
3) the list is never reordered or filtered.
When all of them are met, you may safely use the index as a key.
Ref Link: https://adhithiravi.medium.com/why-do-i-need-keys-in-react-lists-dbb522188bbb

## What is props in React?

- In react every components at the end is javascript function so the parameters passed into functional components
are called props. 

- We use props in React to pass data from one component to another (from a parent component to a child component(s)). Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic.

- props allow us reuse a component's logic dynamically. This means that the data in the component will not be static. So for every other component using that logic, its data can be modified to fit the requirements.

 eg. This is without destructuring
```python
 const TestOne = (props) => { <!-- {name, tool = 'Design'} with destructuring and default val-->
    const name = props.name;  // const myPropName = props.name
    const age = props.age;
    return(
        <div>
          <h1>My name is {name} and age is {age}</h1> // <h1>My name is {myPropName}.</h1>
        </div>
    )
 } 

const App() {
  return (
    <TestOne name='Zitopia' age='23'/>
  )
 }

```
Refernce Link : https://www.freecodecamp.org/news/how-to-use-props-in-react/


 ## What is a Config Driven UI ?

- An application that could easily adapt with just a few changes in this configuration is called Config Driven UI.
- configuring how the UI looks, based on the state change or the data being received dynamically from say from api endpoint is Config Driven UI.
- CDD(Config Driven Development) is a different way to build applications.

- Traditionally we build applications like this:
Lead architects design around business requirements
Application is built and deployed
Changes are done through additional components (SOLID Principles) or painful refactor

- With CDD we build applications like this:
Independent components are built first, starting at the atomic level
An interface (usually JSON) is defined to compose the higher level UI
Combination of reusable components and JSON blueprint allows developers to easily build up and out
At its core, CDD is a way of using modularity to build a loosely coupled set of components that are then composed together using a common interface.
Ref Link: 
https://iamrajatsingh1.medium.com/config-driven-ui-c8e93b730993
https://medium.com/captech-corner/an-intro-to-configuration-driven-development-cdd-48a1c088baa9