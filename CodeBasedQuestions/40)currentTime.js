let check=new Date;
let weekdays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const minutes = check.getMinutes();
const seconds = check.getSeconds();
const milliseconds = check.getMilliseconds();

let day=weekdays[check.getDay()-1];
let hr=check.getHours();
let ampm=hr>=12?'PM':'AM';
const formattedHours = hr % 12 || 12;

const formattedTime = `${formattedHours} ${ampm} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} : ${milliseconds}`;
console.log(`Today is ${day}.`);
console.log(`Current Time is ${formattedTime}`);

