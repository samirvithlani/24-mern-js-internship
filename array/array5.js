var data = ["hindi","english","marathi","malayalam"]


// data.forEach((d)=>{
//     console.log(d)
// })


var x = data.map((d)=>{
    // console.log(d)
    return d.toUpperCase()
})
console.log(x)


var filData = data.filter((d)=>{
    //hindi
    //english
    //marathi

        return d.length>5
})
console.log(filData)


// for(let i=0;i<data.length;i++){

//         console.log(data[i])
// }