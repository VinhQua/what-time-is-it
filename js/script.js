var time = new Date().getHours()
var greeting 
console.log(time)
var userName = prompt(`What's your name?`)
if (time <= 12) {
    greeting = `Good morning, ${userName} !`
} else if (time <= 18) {
    greeting = `Good afternoon, ${userName} !`
} else if (time <= 22) {
    greeting = `Good evening, ${userName} !`
} else {
    greeting = `Go to bed, ${userName} !`
} 
alert(greeting)