const justFood = (numberOfPeople) => {
    return `catering od Just Food pro ${numberOfPeople} lidí za ${Math.round(
        numberOfPeople * 400)} Kč`
}

const yourMama = (numberOfPeople) => {
    return `catering od Your Mama pro ${numberOfPeople} lidí za ${Math.round(
      numberOfPeople * 1700
    )} Kč`
  }
  
const flavourHaven = (numberOfPeople) => {
    return `catering od Flavour Haven pro ${numberOfPeople} lidí za ${Math.round(
      numberOfPeople * 3000
    )} Kč`
  }

const createEvent = (eventName, numberOfPeople, catering) => {
    return `<p>Událost ${eventName} s ${catering(numberOfPeople)}</p>`
  }


/*
Testování v console (počet lidí = 10)

console.log(justFood(10))
console.log(yourMama(10))
console.log(flavourHaven(10))
*/

/* 
Navíc: testování v console - fce createEvent (v console jsou vidět <p></p>, na stránce ne)

console.log(createEvent("Just eat it", 200, justFood))
console.log(createEvent("Party hard", 50, yourMama))
console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven))
*/

document.body.innerHTML += createEvent("Just eat it", 200, justFood)
document.body.innerHTML += createEvent("Party hard", 50, yourMama)
document.body.innerHTML += createEvent("Inaugurace prezidenta", 100, flavourHaven)


  