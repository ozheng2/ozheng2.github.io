let theList = ["Hello", "Hola", "Bonjour", "Guten Tag", "Salve", "Zdravstvuyte", "你好", "こんにちは", "Olá", "안녕하세요", "Asala am‎alaikum", "Goddag", "Shikamoo", 
"Goedendag", "Yassas", "Dzień dobry", "Selamat siang", "Namaste", "Namaskar", "Merhaba", "Shalom", "God dag", "Hej"]


function randomWordPicker(aList){
    let theListLength = theList.length / 10
    let theAnswer = Math.floor( ( Math.random( ) * 10 ) * theListLength  ) 
    return aList[theAnswer]
}

let result = randomWordPicker(theList)
document.querySelector("h1").innerHTML = result
console.log(result)