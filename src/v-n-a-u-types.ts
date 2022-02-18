// we'll look at void, never, any, unknown types in typescript

//void

let foo: void = null //no error
let foo2: void = undefined //no error

// but the above examples are not of any use. 
// generally void is used for a function that doesn't return anything.

const doSomething = ():void => {
    console.log('This is just a c')
}

// any. Apparently the worst type it seems 🤷‍♂️. Typescript wants you to forget about this 😂.

const any:any = 'any'

any.any() //no errors here.

// never. A function returnig any cannot have any reachable point.

const neverFunc = ():never => {
    // console.log('neverFunc')
    throw 'never'
}


// unknown. wait for the unknow usecase. It's coming 🔜 👇👇👇.
let vAny:any = 10
let vUnknown:unknown = 10

console.log(vAny === vUnknown) // will be true because both of them will be var's in JS

let s1:string = vAny

//let s2:string = vUnknown // unknown is not assignable to string.

let s2:string = vUnknown as string // using as operator to convert unknown type to string

//here comes the unknown use case

let pageNumber: string = '33'

// let numPageNumber: number = pageNumber as number // -> gives error ans suggests to convert to unknown first and then number.

let numPageNumber: number = pageNumber as unknown as number
