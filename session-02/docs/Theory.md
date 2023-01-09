
## What is `NPM`?
- NPM is the world largest software library(Registry). It also used as package manager, create and publish packages and 
installer. It is free to use.

## What is `Parcel/Webpack`? Why do we need it?
- Parcel/Webpack are the bundlers that used for mostly Javascript and Typescript. It offers blazing fast performance utilizing multicore processing and requires very less to zero configuration. Parcel/Webpack is a bundler that means all the javascript code written in different files and folders including all the dependencies and packages are bundled and minified in a single file which is then given
to the browser.

## What is `.parcel-cache`?
-  Parcel cache stores a information about your project when parcel build it, so when it rebuilds, it
      it doesn't have to re-parse and re-analyze everything from the scratch.
- For the first build, parcel takes time but for the
subsequent builds it will take lesser time as it will use the cache already created.

## What is `npx` ?
-  A tool for executing node packages.
- npx is tool which allows to run executables from the packages without letting the packages to be installed
globally. It also automatically installs or prompts developer regarding the package if not installed already.

## What is difference between `dependencies` vs `devDependencies`?
- Packages required by your application in production. while dev dependencies are Packages that are only needed for local development and testing.

##  What is Tree Shaking?
- This is important for preparing code that is production ready, for example with clean structures and minimal file size.
- It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.
- Tree Shaking is also called Dead Code Elimination. Parcel/WebPack(any bundler) analyzes all the modules for imports and exports
and eliminates all the things which are unused. Works for both dynamic and static imports.

##  What is Hot Module Replacement?
-  It allows all kinds of modules to be updated at runtime without the need for a full refresh.
-  Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

1. Minification - It generates minified files in dist directory for product build.

2. Caching while development - It generates and maintains a .percel-cache directory for caching the files during development. It helps in faster development build.

3. Compatible with older version of browser - It uses browserlist package internally for making the code compatible with every browser.

4. HTTPS on development - We can enable HTTPS during our development.

5. File Watcher - It uses File Watcher written in C++ to watch every file in our project root (including node_modules) and determines which files to rebuilt.

6. Zero configuration bundler - No configuration is required in order to use parcel in the application.

## What is .gitignore? What should we add and not add into it?
- This file contains the list of files/directories that we need not be present in the repository.

- .gitignore file is used for git repo in the project root directory. We use it for mentioning all the files or directories which we don't want to push to git repo.

- We should not add those files which later can be generated on the server. For example, We won't add node_modules in the git repo as we can generate it using package.json and package-lock.json in the server. So we only push package.json and package-lock.json files.

## What is the difference betweeen package.json and package-lock.json.

- package.json : this file holds various metadata relevant to the project. It contains basic information about the project Application name/version/scripts (ng scripts) etc

- package-lock.json : 
        -> It is generated automatically which locks the versions of the dependencies on the which the application is running and also contains the record of all the dependencies and their dependencies(transitive) on which the application is running. So when someone will install the project they will have the same version of the dependencies.
        -> It records the same version of the installed packages which allows to reinstall them. Future installs wll be capable of building identical description tree.

## Why should I not modify package-lock.json?
- If we modify it, then the transitive dependency tree would get corrupted and as a result when a developer try to install it in their system or server, it can generate error and application won't run until it gets same dependency environment because of unfitting versions.
- package-lock.json file contains the information about the dependencies and their versions used in the project. Modifying, it would cause dependency issues in the production environment.

## What is `node_modules` ? Is it a good idea to push that on git?
- node_modules is directory generated by npm for managing the transitive dependecies of the project. When we install a package through npm it is generally saved in this directory with its dependencies.

- We should not add those files which later can be generated on the server. We won't add node_modules in the git repo as we can generate it using package.json and package-lock.json in the server. So we only push package.json and package-lock.json files.

##  What is the `dist` folder?
- dist folder is generated by bundler. The bundler maintains its development and production build files in it. 

##  What is browserlists?
- The config to share target browsers and Node.js versions between different front-end tools. It is used in many bundlers by default.