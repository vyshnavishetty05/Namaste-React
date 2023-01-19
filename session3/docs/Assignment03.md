## What is JSX?
- It is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. 
- JSX may remind you of a template language, but it comes with the full power of JavaScript.
- JSX produces React “elements”. 
- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
- JSX converts HTML tags into react elements.
- You are not required to use JSX, but JSX makes it easier to write React applications.
Is like HTML syntax but not exact HTML. Tag syntax is neither a string nor HTML. It’s syntax extension which has the full power of JavaScript. 

# Example 1:
JSX:
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

# Example 2:
Without JSX:
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

## Superpower of JSX
- It makes code easy to read, maintain
   - HTML like syntax, easier to write, debug.
   - It accepts properties like attributes in HTML, thus easier to pass data from parent to child.
   - evaluates to JS expression at the end, thus acts like a value to variable, flexibility.
- JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.
As JSX is an expression, we can use it inside of if statements and for loops, assign it to variables, accept it as arguments, or return it from functions.
It is type-safe, and most of the errors can be found at compilation time.
Using JSX, you can write markup inside Javascript, 
providing you with a superpower to write logic and markup of a component inside a single .jsx file.
Without JSX complex to handle and understand code. if you want to create a large Application in reacting so without JSX 
handle All component pieces of code are more difficult so using the JSX is handled to easily large applications.

- We can not execute JSX code directly inside the browser because browser does not understand JSX so we required the compiler for 
executing JSX code to JavaScript. Babel is the compiler convert your JSX code into JavaScript. Here Babel working like Transfer JSX code into JavaScript 
and also you can use Babel compiler through the CDN(online).

- JSX is Faster compared to normal JavaScript code.
using JSX you can create faster Application in React.

# Role of type attribute in script tag? What options can I use there?

- The HTML <script> type Attribute is used to specify the MIME type of script and identify the content of the Tag. 
It has a Default value which is “text/javascript”.
The type attribute specifies the type of the script.
The type attribute identifies the content between the <script> and </script> tags
text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
- Syntax
<script type="text/javascript"></script>
- text/ecmascript : this value indicates that the script is following the EcmaScript standards.
- module: This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.
- text/babel : This value indicates that the script is a babel type and required bable to transpile it.
- text/typescript: As the name suggest the script is written in TypeScript.

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
A: The Difference is stated below:
•	{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
•	<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. Its self closing component which return JSX value.
•	<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
Example
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>




