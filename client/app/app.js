(function() {

	var AppComponent = ng
		.Component({
			selector: 'my-app',
			template: '<h1>Basic Component</h1>'
		})
		.Class({
			constructor: function() {}
		});

	document.addEventListener('DOMContentLoaded', function() {
		ng.bootstrap(AppComponent);
	});

})();
