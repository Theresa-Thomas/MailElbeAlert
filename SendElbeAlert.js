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
       SecureToken:"301f9eb3-ef4f-485b-9c8c-e431db83537a",
        To : 'theresathomas16@gmail.com',
        From : "theres.thoms@gmail.com",
        Subject : "Alert Email",
        Body : "<html><h2>Water Level Alert</h2><strong>"+body+"</strong></html>"
    }).then(
      message => alert(message)
    );
       
    
    
}
