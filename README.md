Rage Multiplayer API Google Closure externs
========

If you are here, then you are already familiar with Google Closure Compiler and maybe you know about its benefits

> Efficiency

The Closure Compiler reduces the size of your JavaScript files and makes them more efficient, helping your application to load faster and reducing your bandwidth needs.

> Code checking

The Closure Compiler provides warnings for illegal JavaScript and warnings for potentially dangerous operations, helping you to produce JavaScript that is less buggy and easier to maintain.

This package provide externs of Rage Multiplayer API and gives you the ability to compile code using GCC.

Quickstart
=======

Install this package with npm
```
  npm i --save-dev @vanetti/ragemp-closure-externs-c
```
or download from repository and unzip to your project directory

Download [Google Closure Compiler](https://developers.google.com/closure/compiler/docs/gettingstarted_app?hl=ru) and [JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html). Check your user enviroment variable PATH and add JDK/bin if not exists.

Then unzip closure compiler to your project directory and use CLI to work with.

Example
=====
* We re installed package from npm
* Closure compiler at the root directory of the project
* We are using advanced level of compilation, lol, anyway you don't need externs if level is not advanced

```
java -jar closure.jar --externs node_modules/@vanetti/ragemp-closure-externs-c/externs/index.js --compilation_level ADVANCED --env BROWSER --js dist/bundle.js --js_output_file dist/bundle.closure.js
```
