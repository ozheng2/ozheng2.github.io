let theList = ["hello", "there", "john", "how", "are", "you", "doing"]


function randomWordPicker(aList){
    let theListLength = theList.length / 10
    let theAnswer = Math.floor( ( Math.random( ) * 10 ) * theListLength  ) 
    return aList[theAnswer]
}

let result = randomWordPicker(theList)
document.querySelector("h1").innerHTML = result
console.log(result)