var user = require('../user.js');
let skillz = require('../skillz.js');


module.exports = {
	getName : (req, res, next) => {
		if (req.query.name) {
			res.json(user.name);
			return;
		}
		res.status(200).json(user.name);
	},
	getLocation : (req, res, next) => {
		if (req.query.location) {
			res.json(user.location);
			return;
		}
		res.status(200).json(user.location);
	},
	getOccupations : (req, res, next) => {
		if (req.query.order) {
			if (req.query.order === 'desc') {
				res.json(user.occupations.sort())
			} else {
				res.json(user.occupations.sort().reverse())
			}
			return;
		}
		res.status(200).json(user.occupations);
	},
	getLatestOccupation : (req, res, next) => {
		if (req.query.occupations) {
			res.json(user.occupations[user.occupations.length-1]);
			return;
		}
		res.status(200).json(user.occupations[user.occupations.length-1]);
	},
	getHobbies : (req, res, next) => {
		if (req.query.hobbies) {
			res.json(user.hobbies);
			return
		}
		res.status(200).json(user.hobbies);
	},
	getHobbyType : (req, res, next) => {
		if (req.params.type) {
			const hobbies = user.hobbies.filter( (val) => {return val.type === req.params.type});
			res.json(hobbies);
			return;
		}
		res.status(200).json(user.hobbies);
	},
	getFamily : (req, res, next) => {
		if (req.query.family) {
			res.json(user.family);
			return;
		}
		res.status(200).json(user.family);
	},
	getFamilyGender: (req, res, next) => {
		if (req.query.gender) {
			const filtered = user.family.filter( (val) => {return val.gender.toLowerCase() === req.query.gender.toLowerCase();
			});
			res.json(filtered);
			return;
		}
		res.status(200).json(user.family);
	},
	getRestaurants: (req, res, next) => {
		res.json(user.restaurants);
		res.status(200).json(user.restaurants);
	},
	getOneRestaurant: (req, res, next) => {
		console.log(req.query.name);
		if (req.query.name) {
			for (let i of user.restaurants) {
				if (i.name === req.query.name) {
					res.json(i);
					return;
				}
			}
		    res.json('could not find');
			res.status(200).json(user.restaurants);
		}
		res.status(200).json(user.restaurants);
	},
	// PUT METHODS
	changeName: (req, res, next) => {
		if (req.body.name) {
			user.name = req.body.name;
			res.json(user);
			return;
		}
		res.status(200).json(user);
	},
	updateLocation: (req, res, next) => {
		if (req.body.location) {
			user.location = req.body.location;
			res.json(user);
			return;
		}
		res.status(200).json(user);
	},
	// POST METHODS
	addHobby: (req, res, next) => {
		if (req.body.hobby) {
			user.hobbies.push(req.body.hobby);
			res.json(user.hobbies);
			return;
		}
		res.status(200).json(user.hobbies);
	},
	addOccupation: (req, res, next) => {
		if (req.body.occupation) {
			user.occupations.push(req.body.occupation);
			res.json(user.occupations);
			return;
		}
		res.status(200).json(user.occupations);
	},
	addFamilyMem: (req, res, next) => {
		if (req.body.familyMem) {
			user.family.push(req.body.familyMem);
			res.json(user.family);
			return;
		}
		res.status(200).json(user.family);
	},
	addRestaurant: (req, res, next) => {
		if (req.body.restaurant) {
			user.restaurants.push(req.body.restaurant);
			res.json(user.restaurants);
			return;
		}
		res.status(200).json(user.restaurants);
	},
	getSkillz: (req, res, next) => {
		if (req.query.experience) {
			const filtered = skillz.filter((val) => {
				return val.experience === req.query.experience;
			});
			res.json(filtered);
		}
		res.status(200).json(skillz);
	}
}