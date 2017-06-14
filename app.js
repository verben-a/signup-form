angular.module('myApp', []).
directive('signUp', function() {
	return {
		restrict: 'E',
		require: '^ngModel',
		template: '<div class="form"><div signup></div><input type="text" ng-model="name" placeholder="First Name"/><input type="text" ng-model="surname" placeholder="Last Name"/><br><input type="text" ng-model="email" placeholder="Email"/><br><br><button class="submit">Give us your infoz!</button></div>'
	}
})
