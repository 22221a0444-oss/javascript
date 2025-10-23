// console.log("before time out")
// setTimeout(function(){
//     console.log("inside time out")
// },0.1000)

// let count=0;
// let interval=setInterval(function(){
//     console.log(count);
//     count=count+1;
//     if(count==5)
//     {
//         clearInterval(interval)
//     }
// },5000)



// function register(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("User Registered")
//             resolve()
//         },1000)
//     })
// }
// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User Logged In")
//             resolve()
//         },1000)
//     })
// }
// function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User Data Fetched")
//             resolve()
//         },1000)
//     })
// }
// function  displaydata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User Data Displayed")
//             resolve()
//         },1000)
//     })
// }
// register()
// .then(()=>login())
// .then(()=>fetchdata())
// .then(()=>displaydata())
// .catch(()=>console.log("Error"))
// .finally(()=>console.log("Final block is executed"))




// async function register(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("User Registered")
//             resolve()
//         },1000)
//     })
// }
// async function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User Logged In")
//             resolve()
//         },1000)
//     })
// }
// async function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User Data Fetched")
//             resolve()
//         },1000)
//     })
// }
// async function  displaydata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("User Data Displayed")
//             resolve()
//         },1000)
//     })
// }
// async function user()
// {
//     await register()
//     await login()
//     await fetchdata()
//     await displaydata()
// }
// user()





