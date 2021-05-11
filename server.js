const express = require("express"); 
const wakeUpDyno = require("./wokeDyno"); // my module!


const PORT = 3000; // whatever port you like
const DYNO_URL = "https://log-calculator-client.herokuapp.com/";
const DYNO_URL_1 = "https://log-calculator.herokuapp.com/";
const DYNO_URL_2 = "https://stopdynosleeping.herokuapp.com/"// the url of your dyno

const app = express(); // instantiate Express app

app.listen(PORT, () => {
    wakeUpDyno(DYNO_URL);
    wakeUpDyno(DYNO_URL_1);
    wakeUpDyno(DYNO_URL_2)// will start once server starts
})
