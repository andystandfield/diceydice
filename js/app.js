// App

window.Dice = Ember.Application.create();


// Routers

Dice.Router.map(function () {
	this.resource('interface', { path: '/' });
});


// 