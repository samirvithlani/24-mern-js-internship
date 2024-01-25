var employees = [
    {
        id:101,
        name:"amit",
        gender:"male",
        salary:10000,
        isMarried:false,
        child:0,
        city:"ahmedabad"
    },
    {
        id:102,
        name:"neha",
        gender:"female",
        salary:30000,
        isMarried:true,
        child:1,
        city:"ahmedabad"
    },
    {
        id:103,
        name:"parth",
        gender:"male",
        salary:50000,
        isMarried:true,
        child:2,
        city:"mumbai"
    },
    {
        id:104,
        name:"priya",
        gender:"female",
        salary:100000,
        isMarried:true,
        child:0,
        city:"mumbai"
    },
]


///find all female employees
//find all male employees from ahmedabad
//find all employee who are married
//find all employee who are married and have 2 child
/// find all male employee who is married 
//find all female employees from mumbai


var fil1 = employees.filter((emp)=>{
    return emp.gender =="female"
})
console.log(fil1)


var fil2 = employees.filter((emp)=>{
    return emp.gender =="male" && emp.city =="ahmedabad"
})
console.log(fil2)


var file3 = employees.filter((emp)=>{

    return emp.isMarried == true
})
console.log(file3)

var fil4 = employees.filter((emp)=>{
    return emp.isMarried == true && emp.child == 2
})