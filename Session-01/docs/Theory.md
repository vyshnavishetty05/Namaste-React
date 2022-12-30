##  What is Emmet?

- Emmet is a plugin which is used to generate the code snippets based on just typing the abbrevations there by reducing the effort, as well as speeding up the code generation

## Difference between library and framework ?

## Framework:
 - Usually its regarded as the basic sturcture , to which we add our code to build the fuctionality, it allows us to work in  the certain flow or provides standard ways to create applications.

## Library:
 - It consists of reusable fuctions, classes which are useful to perform several tasks. Basically, We need library to reuse the code which is already implemented/created in library, written by other developers:) which can reduce the effort for writing the logic/fuctionality

 - A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.

## What is CDN? Why do we use it?

- A Network of servers distributed through out the world that delivers cached content close to where each end user is accessing the internet, from the "origin"/"original" server.It is for better performance, availability and low latency.

 ## Why is React known as React?

 - React is a UI rich JS library that responds or renders the application based on its state/data change. As react updates its state based on its changes, it's called as "REACT"!

 ## What is crossorigin in script tag?
 - It is used to share resource from one domain to other domain ensuring safety.
 The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
 - Web pages often make requests to load resources on other servers. Here is where CORS comes in.
 A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

 - Usecase: it helps prevent browsers from obfuscating error messages. But if the script is not served with the CORS headers with correct credentials, the browser blocks the script entirely.

 ## What is diference between React and ReactDOM?
  - React: React is a javascript library, designed for building better user interfaces.

  - React-DOM: React-DOM is a library to React which glues React to the browser DOM, rendering the UI.

  - In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

## What is difference between react.development.js and react.production.js files via CDN?
  - react.production.js has the minified version of files that would make application to have better performance as minifed version reduces payload and script parse time, resulting in faster page loads, and also its difficult to debug in this case. whereas react.development.js does not have minified version and not optimized , therefore easy to debug.

## What is async and defer?
  - Async and defer are attributes of script tag used to specify how browser should handle the script when loading a page.
     Generally, While parsing the HTML code when browser encounters script tag, it pauses the parsing, fetches the script from network and executes the script, Once the script is executed after that browser resumes HTML parsing.

  - ASYNC attribute: While HTML parsing is going on, scripts are fetched from the network asynchronously, once scripts are fetched, HTML parsing pauses and scripts are executed then and there and once the scripts are executed, HTML parsing resumes. Order of exceution is not guaranteed and it is only suggested to use if scripts are independent.
                            
  - DEFER attribute: Fetches the script while HTML parsing is going on but executes the script only when HTML parsing is finished.
     It guarantees order of excecution and it is suggested to use of scripts hvae any dependencies on each other.
