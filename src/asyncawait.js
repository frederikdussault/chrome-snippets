console.group("PromisingFunction");
console.log("build a function returning a Promise");

async function startAsyncTest() {
  let x = 5;
  console.trace("x:", x);

  let res = await addAndWait(x, 10);
  res = await addAndWait(res, 10);
  res = await addAndWait(res, 10);
}

async function addAndWait(a, b) {
  console.trace("a:", a, "b:", b);

  return new Promise(
    resolve => { 
      setTimeout(() => {
        let sum = a + b;
        console.trace("sum:", sum);

        resolve(sum);
      }, 2000);
    },
    reject => { console.trace("OUCH!! something's wrong!"); reject("OUCH!! something's wrong!"); }
  );
  
}
startAsyncTest();

console.groupEnd("PromisingFunction");
