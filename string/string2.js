var data = "India is my country, India is beautiful country"

//data = data.replace("i", "#")
//data = data.replace("i", "#", "g")
console.log(data)
var flag = data.startsWith("x")
console.log("startswith..",flag)
console.log("endswith...",data.endsWith("ry"))
console.log("includes...",data.includes("tr"))

//var c = userName.charAt(1)
var ind = data.indexOf("country")
console.log("index of ...",ind)

var ind1 = data.lastIndexOf("i")
console.log("last index of ...",ind1)
