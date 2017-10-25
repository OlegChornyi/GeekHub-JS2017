//FIRST THING FIRST




function sumOfNumbers(n) {
  if (n == 1) return 1;
  return n + sumOfNumbers(n-1);
}
alert(sumOfNumbers(35));





// SECOND THING SECOND



originalObj = { a: 0 , b: { c: 0}};//one to be cloned
            
            function test(someObj) {
  

                 
                return Object.assign({}, someObj);
                
                  
                 
                }

            var copiedObj = test(originalObj);
            console.log(JSON.stringify(copiedObj ));





//LAST THING LAST



function arrGenerate(n) {
    var newArr = [];
    for (var i = 0; i < n; i++) {
        newArr[i]= i;
    }
    return newArr;
}
var arrQueue = arrGenerate(1000);

function objGeneratorQueue(n) {
    var obj = {};
    for (var i = 0; i < n; i++){
        obj[i]=i;
    }
    return obj;
}
var objQueue = objGeneratorQueue(1000);


function objGeneratorRand(n) {
    var obj = {},
        propName = 'a';
    for(var i = 1; i < n; i++){
        propName += i;
        obj[propName] = i;
    }
    return obj;
}
var objRand = objGeneratorRand(1000);
console.log(objRand);

function benchmarkObj(obj) {
    for (var prop in obj){
        console.log(prop);
    }
}

console.time('arrQueue');
benchmarkObj(arrQueue);
console.timeEnd('arrQueue');

console.time('arrQueue');
benchmarkObj(arrQueue);
console.timeEnd('arrQueue');

console.time('randObj');
benchmarkObj(objRand);
console.timeEnd('randObj');

function benchmarkArr(obj) {
    var len = Object.getOwnPropertyNames(obj).length;
    for(var i = 0; i<len; i++){
        console.log(obj[i]);
    }
}

console.time('arrQueue');
benchmarkArr(arrQueue);
console.timeEnd('arrQueue');

console.time('arrQueue');
benchmarkArr(arrQueue);
console.timeEnd('arrQueue');

console.time('randObj');
benchmarkArr(objRand);
console.timeEnd('randObj');
