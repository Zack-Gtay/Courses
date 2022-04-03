


// // // // // // THROWING ERRORS

// // // // // // if(typeof namee !== 'string'){

// // // // // //   throw new Error("This is not valid");


// // // // // // }
// // // // // // else
// // // // // //   console.log(`Hello ${namee}`);


// // // // // let namee = 12



// // // // // // CATCHING ERRORS

// // // // // try{
// // // // //   [1,2,42].length()
  
// // // // // }catch(error){
// // // // //   console.log(error.message);
// // // // // }


// // // // // Self ivoking

// // // // // (function (){
// // // // //   console.log("I can run myself.");
// // // // // })()


// // // // // Classes

// // // // class Vehicle{
// // // //   constructor(brand, model){
// // // //     this.brand = brand
// // // //     this.model = model
// // // //   }

// // // //   fuel_up(){
// // // //     return `Your ${this.model}'s Gas tank is now full.`
// // // //   }

// // // //   drive(){
// // // //     return `The ${this.model} is driving now`
// // // //   }
// // // // }


// // // // class ElectricVehicle extends Vehicle {
// // // //   constructor(brand, model){
// // // //     super(brand, model)
// // // //     this.battery_size = 80
// // // //   }


// // // //   charge(){
// // // //     return `${this.model} is now fully charged.`
// // // //   }

// // // //   fuel_up(){
// // // //     return `${this.model} doesn't have a fuel tank.`
// // // //   }
// // // // }


// // // // vehicle1 = new ElectricVehicle('Mercedes', 'AMG S53')

// // // // console.log(vehicle1.fuel_up());
// // // // console.log(vehicle1.drive());
// // // // console.log(vehicle1.charge());
// // // // console.log(vehicle1.battery_size);

// // // // CLOSURE 

// // // function UrlBuilder(Scheme){
// // //   return function (domain) { 
// // //       return function (path) {
// // //         return `${Scheme}://${domain}/${path}`;
// // //       }
// // //   }
// // // }
// // // console.log(UrlBuilder('https')('codehance.com')('courses'));


// // // Arrow Function

// // const add = (num1, num2) =>{
// //   return num1 + num2;
// // }



// // // Arrow Implicit return 

// // console.log(add(2,5));

// // const add2 = (num1, num2) => num1 + num2;
// // console.log(add2(6, 8));


// // // Arrow Single arg

// // const square = num => num * num

// // console.log(square(5));



// Array Destructuring

// colours = ['red', 'orange', 'blue', 'yellow', 'brown']

// // let [first, second, third] = colours
// // console.log(third);

// // Destructuring with Rest

// let [first, second, third, ...rest] = colours

// console.log(rest);

// const nums = [a, b, ...rest] = [0, 1, 1, 2, 3, 5]
// const [a, b, ...rest] = [0, 1, 1, 2, 3, 5]
// console.log(a, b, rest);

// const {student, ...address} = {
//  student: 'Adam Peters',
//  street: '26 High Street',
//  postalCode: 'SE14',
//  city: 'London'
// }

// console.log(student, address.street);

// function greet(...names){
//   names.forEach(name => {
//     console.log(`Hi ${name}`);
//   })
// }

// greet('Zack', 'James')



// Spread operator

// const oneToFive = [1,2,3,4,5,6]
// const oneToTen = [...oneToFive, 7,8,9,10]

// let address = {
//   street: '26 High Street', 
//   postalCode: 'SE14'
// }

// address = {...address, city: 'London'}

// console.log(address);




// Modules

// import {hello_world} from './hello.mjs'

// console.log(hello_world());


// Synchronous (Sync) actions
// console.log('Start');

// console.log('Middle');

// console.log('End');


// Asynchronous (Sync) actions


// console.log('Start');
// setTimeout( () => {
//     console.log('Wait for 2 secs');
// }, 2000)

// console.log('End');

// Callback
// function start(callbacks){
//     console.log('Start');
//     callbacks()
// }

// function middle(callbacks){
//     setTimeout(() =>{
//         console.log('Middle');
//         callbacks()
//     },2000)
    
// }

// function end() {
//     console.log('end');
//   }

//   start(()=>{
//       middle(()=>{
//           end()
//       })
//   })

// Promises
function start(){
    return new Promise((resolve, reject) =>{
        resolve(console.log('Start'));
        
    })
}

function middle(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(console.log('Wait for 2 seconds'));
        },2000)
    })
    
}

function end() {
    return new Promise((resolve, reject) =>{
        resolve(console.log('end')  )
    })
}

// start()
//     .then(middle)
//     .then(end)
//     .catch(error => console.log(error.message)


(async function run() { 
    try{
        await start()
        await middle()
        await end()
    }
    catch(error){
        console.log(error.message);
    }
})()

