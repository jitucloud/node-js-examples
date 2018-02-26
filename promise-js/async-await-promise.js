const fetch = require('node-fetch');


function fetchAvatarUrl(){
    const result = fetch("https://catappapi.herokuapp.com/users/123")
      .then(response => response.json())
      .then(data => data.imageUrl);
      return result;
}

const result = fetchAvatarUrl()
result.then(x=>console.log(x));

/*
async function fetchAvatarUrl1(){
    const response = await fetch("https://catappapi.herokuapp.com/users/123");
    const data =  await response.json();
    return Promise.all([ data.imageUrl]);
    }

console.log(fetchAvatarUrl1()); 
*/

