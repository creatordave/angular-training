angular.module('angular.third.party.module',[])

.provider('angThirdParty', function(){

	var timeout = 3000,
		dataToProvide = [
			{
				id: 235356
				name: "iPod 3rd Gen",
				price: 75.5,
				qty: 10
			},
			{
				id: 634554
				name: "iPhone 6",
				price: 699.99,
				qty: 25
			},
			{
				name: 'Macbook Pro 2011',
				price: 800,
				qty:2
			},
			{
				id: 634555,
				name: "iPhone 6 Plus",
				price: 999.99,
				qty: 10
			},
			{
				id: 325534,
				name: "Google Glass",
				price: 2475,
				qty:5
			}
		];

	this.changeTimeout = function(t){
		timeout = t;
		return this;
	};

	this.$get = ['$q', function($q){
		var defer = $q.defer();
		setTimeout(function(){
			defer.resolve(dataToProvide);
		},timeout);
		return defer.promise;
	}];



});
