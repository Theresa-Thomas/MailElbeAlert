
import fetch from "node-fetch";



getElbeData();
setInterval( getElbeData, 300000);

async function getElbeData()
{
    
  const response =  await fetch("https://pegelonline.wsv.de/webservices/rest-api/v2/stations/SCHÖNA/W.json?includeCurrentMeasurement=true");
  const jsonElbeData =  await response.json(); 
  const currentData=jsonElbeData.currentMeasurement.value;
 
  SendEmail(currentData);
}

function SendEmail(data){
    var body = data>100?"ALERT!Water level above threshold":"Water Level below threshold";

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "theres.thoms@gmail.com",
        Password : "84217CE2C40D8EFE94085C91414EACCEB295",
        To : 'theresathomas16@gmail.com',
        From : "theres.thoms@gmail.com",
        Subject : "Alert Email",
        Body : "<html><h2>Water Level Alert</h2><strong>"+body+"</strong></html>"
    }).then(
      message => alert(message)
    );
       
    
    
}
