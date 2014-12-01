angular.module('angular.third.party.module',[])

.provider('angThirdParty', function(){

	var timeout = 3000,
		dataToProvide = [
			{
				name: "item 1",
				price: 2.5,
				qty: 5
			},
			{
				name: "item 2",
				price: 5.99,
				qty: 2
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