/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.
*/

// (Primitive Types)     Follows order in stack 
let ayush = 5 ;
let momi = ayush ;
momi = 7 ;
//console.log(momi) ;

//Non-Primitive Types {objects}       Follows order in heap
const User = {
    email : "ayushnag@gmail.com",
    id : 1 
}
const User1 = User ;              // Both User and User1 reference the same heap.
User1.email = "xyz@gmail.com"     // If User1.email changes, so does the User.email
//console.log(User1.email)
//console.log(User.email)  

ayush = "a,y,us,h" ;
console.log(ayush)
let ayu = ayush.slice(1,3)
let nag = ayush.split(",")
console.log(ayush , nag)    // Original string does not change
console.log(ayu)

// Arrays 

let arr= new Array(0 , 2 , "ayush", true, 5) ;
arr = [0 , 2 , 3, 4 , 5] ;
console.log(arr)

const arr1 = arr.splice(1,3) ;
console.log(arr); // Leftover elements after splice. Note split is used in Strings. Here array gets modified. 
console.log(arr1)


let User12 = {
    name : "ayush" ,
    age : 18
}

const user123 = {...User12} 
user123.name = "nag" ;
console.log(user123)
console.log(User12)


console.log(help(100,200,300,400,500))

function help(val1, val2, ...num) {
 return num ;
}

// console.log(help(100,200,300,400,500))     // Throw an error. 
                                            //  Fn cannot be called before declaration in lambda fn.
//  const help = (val1, val2, ...num) => {
//  return num ;
// }



 User12 = {
    name : "ayush" ,
    age : 18,
    method12 ()  {
        console.log(this.age)
        console.log(this)
    }
};
User12.method12()

// this cannot be used inside function 
// const aysu = () => {
//     let age = 10 ;
//     console.log(this.age)
// }
// aysu()

// topic : IIFE Padh lena


let MyMap = new Map() 
MyMap.set("ayush", 1) ;
MyMap.set("momi", 2) ;
MyMap.set("mousumi", 3) ;

for (const [key,value] of MyMap) {
    console.log(key, value) ;
}
 MyMap = ["ayush", "momi", "mousumi", "chandan"]
MyMap.map((item, index) => {
    console.log(item, index)
})

let maps = MyMap.map((item, index) => {
    return (item)
})
console.log(maps)

const MyNums = [1,2,3] ;
let total = MyNums.reduce( (acc, curr) => {
    console.log(`acc is ${acc} and curr is ${curr}`)
    return acc + curr ;
})
console.log(total)


