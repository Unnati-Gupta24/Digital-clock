const date = new Date();
const hour = date.getHours().toString();
const min = date.getMinutes().toString();
const sec = date.getSeconds().toString();

var string = `${hour}+" : "+${min}+" : "+${sec}`

document.querySelector(.time).textContent = string;

