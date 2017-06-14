describe('signUp', function() {

	var scope,
		element,
		compiled,
		html;

	beforeEach(module("myApp"));
	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		html = "<sign-up></sign-up>";
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest(); 
	}));

	it('should render personal data', function() {
		console.log(element, 'el');
		// expect()1).
	})
})