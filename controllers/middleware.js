let skillz = require('../skillz.js');
const secrets = require('../secrets.js');

module.exports = {
	addHeaders : (req, res, next) => {
		res.status(200).set({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			'X-XSS-Protection': '1; mode=block',
			'X-Frame-Options': 'SAMEORIGIN',
			'Content-Security-Policy': "default-src 'self' devmountain.github.io"
		});
		next();
	},
	generateId: (req, res, next) => {
		for (let i = 1; i <= skillz.length; i++) {
			skillz[i-1].id = i;
		}
		res.status(200).json(skillz);
		next();
	},
	verifyUser: (req, res, next) => {
		if (req.params.username === secrets.username && req.params.pin === secrets.pin){
			next();
		} else {
			res.status(200).json('you are not authenticated');
		}
	}
}