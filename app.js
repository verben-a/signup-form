var app = angular.module('myApp', []);

app.directive('signUp', function() {
	return {
		restrict: 'E',
		require: '^ngModel',
		template: '<div class="alina">Alina</div>'
	}
})
.controller('someCtrl', function(){

})