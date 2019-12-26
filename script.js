var d = new Date();
document.getElementById('clock').innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = handler;
xhr.open("GET", "http://worldtimeapi.org/api/timezone/America/Argentina/Salta");
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.send();

function showClock() {
    var obj = document.getElementById('clock');
    var req = new XMLHttpRequest(); 
    req.open("GET", "http://worldtimeapi.org/api/ip", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    req.onreadystatechange = function () {
if (req.readyState != 4 || req.status != 200) return; 
console.log(req.responseText);
obj.innerHTML = 'Время сервера ' + JSON.parse(req.responseText).datetime;
};
            }

setInterval(showClock(), 3600);