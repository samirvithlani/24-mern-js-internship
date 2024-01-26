const fetchStudents = () =>{



return new Promise((resolve,reject)=>{

    setTimeout(()=>{
    //    resolve(["user1","user2","user3"])
    reject({error:"server error"})
    
    },3000)



})

}


// var promise = fetchStudents()
// console.log(promise)
// promise.then((students)=>{
//     console.log(students)
// }).catch((error)=>{
//     console.log(error)
// })

fetchStudents().then((students)=>{
    console.log(students)
}
).catch((error)=>{
    console.log(error)
})