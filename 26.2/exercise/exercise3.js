let a = Math.floor(Math.random() * 100 + 1);
let b = Math.floor(Math.random() * 100 + 1);
let c = Math.floor(Math.random() * 100 + 1);

function returnPromise(a, b, c) {
  const promise = new Promise((resolve, reject) =>{
    const result = (a + b) * c
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      reject(new Error('Informe apenas numeros'));
      return;
    }
    if(result < 50){
      reject(new Error('Valor muito baixo'))
    }
    resolve(result)
  })
  return promise
}

async function asyncAwaitMethod(){
  try {
    const result = await returnPromise(a, b, c)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

asyncAwaitMethod()