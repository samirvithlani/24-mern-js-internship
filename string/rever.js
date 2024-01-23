var data = "naman"

//reverse...
var revStr = ""

"naman"
//5
// 0 1 2 3 4

for(let i=data.length-1;i>=0;i--){
    //console.log(data[i])
    //"" = ""+"a"
    //a = a+"v"
    //av = av+"a"
    //ava = ava+"j"
    revStr+=data[i]

}

console.log(revStr)

if(data == revStr){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}