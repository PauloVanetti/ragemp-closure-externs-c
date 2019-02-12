Google Closure Compiler externs for Rage Multiplayer
========
Download from npm:
```text
  npm i --save-dev @vanetti/ragemp-closure-externs-c
```
Requirements
---
Google Closure Compiler: [download](https://developers.google.com/closure/compiler/docs/gettingstarted_app?hl=ru)

Java: [download](https://java.com/ru/download/)

Basic usage
----

```text
  java -jar closure.jar --externs externs/index.js --compilation_level ADVANCED --env BROWSER --js dist/bundle.js --js_output_file dist/bundle.closure.js
```
