//promise rejected example
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
     console.log('HERE 4');
     reject(new Error('I am not gonna return the money'));
    }, 3000); 
 });
 
 console.log('HERE 1');
 console.log('HERE 2');
 
 prom.then((data) => {
     console.log(data);
 }).catch((error) => {
     console.log(error);
 });
 
 //promise accepted example
 const promise = new Promise((resolve, reject) => {
     setTimeout(() => {     
      resolve('Money is returned');
     }, 3000); 
  });
  
 
 promise.then((data) => {
      console.log(data);
  }).catch((error) => {
      console.log(error);
  });
 
 
 //other way of writing it and we call it chaining 
 const promise_example = new Promise((resolve, reject) => {
     setTimeout(() => {     
      resolve('Money is returned');
     }, 3000); 
  }).then((data) => {
      console.log(data);
  }).catch((error) => {
      console.log(error);
  });