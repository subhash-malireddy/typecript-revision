// we'll look at void, never, any, unknown types in typescript
//void
var foo = null; //no error
var foo2 = undefined; //no error
// but the above examples are not of any use. 
// generally void is used for a function that doesn't return anything.
var doSomething = function () {
    console.log('This is just a c');
};
// any. Apparently the worst type it seems 🤷‍♂️. Typescript wants you to forget about this 😂.
var any = 'any';
any.any(); //no errors here.
// never. A function returnig any cannot have any reachable point.
var neverFunc = function () {
    // console.log('neverFunc')
    throw 'never';
};
// unknown. wait for the unknow usecase. It's coming 🔜 👇👇👇.
var vAny = 10;
var vUnknown = 10;
console.log(vAny === vUnknown); // will be true because both of them will be var's in JS
var s1 = vAny;
//let s2:string = vUnknown // unknown is not assignable to string.
var s2 = vUnknown; // using as operator to convert unknown type to string
//here comes the unknown use case
var pageNumber = '33';
// let numPageNumber: number = pageNumber as number // -> gives error ans suggests to convert to unknown first and then number.
var numPageNumber = pageNumber;
