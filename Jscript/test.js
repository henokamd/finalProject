// const app = {
//     name: 'xxx',
//     powerOn() {
//         console.log("test22");
//     },
//       logB: () => {
//         console.log(this.name);

//     }
// };
// app.logB();


const promFunc = () => {
  let x = false;

  return new Promise((resolve, reject) => {
      if (x) {
          resolve('Resolved');
      }
      else {
          reject('Rejected');
      }
  });
}

const accept = (message) => {
     console.log(message);
}

const rej = (message) => {
     console.log(message);
}

promFunc()
   .then (accept)
          
   .catch(rej)