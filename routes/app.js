module.exports = function (app) {
	app.use('/', require('./all'));
	app.use('/all', require('./all'));
	app.use('/discount', require('./discount'));
	app.use('/jacket', require('./jacket'));
	app.use('/pants', require('./pants'));
};