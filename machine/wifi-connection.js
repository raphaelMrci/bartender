const Wifi = require('rpi-wifi-connection');
let wifi = new Wifi();

wifi.connect({ssid:"SFR_2620", psk:"parametres"}).then(() => {
    console.log('Connected to network');
})
.catch((error) => {
    console.log(error);
});