/** 
 *
 * HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
 * File watcher algorithm - made with C++
 * MINIFY
 * BUNDLING
 * Cleaning our code
 * DEV and production Build
 * Super fast building algorithm
 * does image optimization also
 * Caching while development
 * Compresses
 * Compatible with older version of browser
 * HTTPS in dev
 * port Number
 * Consistent hashin algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code.
 *
 */

import React from 'react';
import ReactDOM from'react-dom/client';
const heading1=React.createElement("h1",{id:"title1",key:'1',style:{color:"blue"}},"Hello everyone!");
const heading2=React.createElement("h1",{id:"title2",key:'2'},"I am Vyshnavi");
const container=React.createElement("div",{id:"title",hello:"world"},[heading1,heading2]);
const rooting = document.getElementById("root");
const root=ReactDOM.createRoot(rooting); 
root.render(container);



