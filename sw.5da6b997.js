webpackJsonp([2],{392:/*!***********************************!*\
  !*** ./src/server/sw-register.js ***!
  \***********************************/
function(e,o){"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(function(e){console.log("Registration succeeded. Scope is "+e.scope)}).catch(function(e){console.log("Registration failed with "+e)})}},[392]);