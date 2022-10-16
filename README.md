SetIntreval is used to call the pegel online api every 5 minutes in order to get current water level measurements for SCHÖNA in the river ELBE.
5 minutes in microseconds i.e 300000 ms is given as one parameter and the function getElbeData is called accordingly.
In the getElbeData function,fetch api is called to get the JSON response and from the response currentMeasurement.value is obtained.
SMTP server set up using elasticemail.com and sent email using Email.send function.
Body is defined according to the threshold value.
