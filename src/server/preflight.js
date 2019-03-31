var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const invocation = new XMLHttpRequest();
const url = 'https://udgt-7790b.firebaseapp.com/';
const body = '<?xml version="1.0"?><person><name>Arun</name></person>';
    
function callOtherDomain(res){
  if(invocation)
    {
      invocation.open('POST', url, true);
      invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
      invocation.setRequestHeader('Content-Type', 'application/xml');
      invocation.onreadystatechange = function () {
        if(invocation.readyState === 4 && invocation.status === 200) {
          console.log(invocation.responseText);
        }
      };
     // invocation.onreadystatechange = handler;
     console.log("I am getting called")
      invocation.send(body); 
    }
}

module.exports = callOtherDomain