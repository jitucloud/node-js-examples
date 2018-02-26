const fetch = require('node-fetch');
const co = require('co');

fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json())
 .then(post => post.title)
 .then(x => console.log(x));

run(function * (){
     const uri = 'https://jsonplaceholder.typicode.com/posts/1';
     const response =  yield fetch(uri);
     const post = yield response.json();
     const title = post.title;
     return title;
 }) 
 .catch ( error => console.log(error))
 .then( x => console.log("Title :" + x))



 function run (generator){
    const iterator = generator();
    function iterate(iteration){
        if(iteration.done) return iteration.value;
        const promise = iteration.value;
        return promise.then(x=>iterate(iterator.next(x)))
    }   
    return iterate(iterator.next());
 }

 /*ßß
 function run (generator){
    const iterator = generator();
    const iteration = iterator.next();
    const promise = iteration.value;
    promise.then( response => {
        const anotherIterator = iterator.next(response);
        const anotherPromise = anotherIterator.value;
        anotherPromise.then(y=> iterator.next(y));

    })    
}*/