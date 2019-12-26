var d = new Date(),
    hours = d.getHours(),
    minutes = d.getMinutes();
// if (hours <= 9) hours = "0" + hours;
// if (minutes <= 9) minutes = "0" + minutes;
document.getElementById('clock').innerHTML = 'Текущее время '+ hours + ':' + minutes;

function showClock()
{
var obj = document.getElementById('clock');
var req;
if (window.XMLHttpRequest)	req = new XMLHttpRequest();
else if(window.ActiveXObject)
{
    try {
        req = new ActiveXObject('Msxml2.XMLHTTP');  
    } catch (e){}									
    try {											
        req = new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e){}
};
if (req) 
{
    req.onreadystatechange = function() 
	{
    	if (req.readyState == 4 && req.status == 200)  
		{ 
            tm = JSON.parse(req.responseText).datetime.substr(12,4);
            
            obj.innerHTML = 'Текущее время '+ tm; }        
    };  
    req.open("GET", 'https://worldtimeapi.org/api/ip', true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.send('clock=1');
} 
else alert("Браузер не поддерживает AJAX");
}
setInterval(showClock, 3600); 


// function clock() {
//     var d = new Date();
//     var month_num = d.getMonth()
//     var day = d.getDate();
//     var hours = d.getHours();
//     var minutes = d.getMinutes();
//     var seconds = d.getSeconds();
     
//     month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
//     "июля", "августа", "сентября", "октября", "ноября", "декабря");
     
//     if (day <= 9) day = "0" + day;
//     if (hours <= 9) hours = "0" + hours;
//     if (minutes <= 9) minutes = "0" + minutes;
//     if (seconds <= 9) seconds = "0" + seconds;
     
//     date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
//     " г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds;
//     if (document.layers) {
//      document.layers.doc_time.document.write(date_time);
//      document.layers.doc_time.document.close();
//     }
//     else document.getElementById("clock").innerHTML = date_time;
//      setTimeout("clock()", 1000);
//     }
//     clock();