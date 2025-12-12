module.exports = function generateAdvisory(data) {
const list = data.list[0];


const temp = list.main.temp;
const humidity = list.main.humidity;
const wind = list.wind.speed;
const rain = list.pop * 100;


let adv = [];


if (rain > 60) adv.push('Avoid irrigation and pesticide spraying today.');
if (temp > 35) adv.push('Increase irrigation for heat-sensitive crops.');
if (wind > 15) adv.push('Avoid spraying pesticides due to wind drift.');
if (humidity > 80) adv.push('High humidity may cause fungal infection; monitor crops.');
if (wind < 10 && rain < 20) adv.push('Good window for pesticide spraying.');


return adv;
};