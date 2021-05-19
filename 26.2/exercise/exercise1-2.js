let a = Math.floor(Math.random() * 100 + 1);
let b = Math.floor(Math.random() * 100 + 1);
let c = Math.floor(Math.random() * 100 + 1);

function returnPromise(a, b, c) {
  return  new Promise((resolve, reject) =>{
    const result = (a + b) * c
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      return reject(new Error('Informe apenas numeros'));
    }
    if(result < 50){
      reject(new Error('Valor muito baixo'))
    }
    resolve(result)
  })
}

returnPromise(a, b, c).then((result) => console.log(result)).catch((err) => console.log(err))