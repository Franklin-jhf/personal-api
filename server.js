const express = require('express');
const bodyParser = require('body-parser');

// APP DECLARATION
const app = express();

// CONTROLLERS

const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');

// MIDDLEWARE
app.use(bodyParser.json());
app.use(middleware.addHeaders);

// ENDPOINTS

app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupations);
app.get('/api/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/api/hobbies/:type', mainCtrl.getHobbyType);
app.get('/api/family/', mainCtrl.getFamilyGender);
// app.get('/api/family/', mainCtrl.getFamily);
app.get('/api/restaurants/', mainCtrl.getOneRestaurant);
// app.get('/api/restaurants/', mainCtrl.getRestaurants);

app.put('/api/name', mainCtrl.changeName);
app.put('/api/location', mainCtrl.updateLocation);
app.post('/api/hobbies', mainCtrl.addHobby);
app.post('/api/occupations', mainCtrl.addOccupation);
app.post('/api/family', mainCtrl.addFamilyMem);
app.post('/api/restaurants', mainCtrl.addRestaurant);

app.get('/api/skillz', mainCtrl.getSkillz);
app.post('/api/skillz', mainCtrl.addSkill);


app.listen(3000, () => {
	console.log('listening on port 3000');
});