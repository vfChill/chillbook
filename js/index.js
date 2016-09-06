angular.module('MyApp')
  .controller('AppCtrl', function($scope, $http) {
	
		$http.get('../data/users.json')
       .then(function(U){
          $scope.users = U.data;                
        });
	
//    $scope.users = [
//			{"firstName":"Victor", "lastName":"Figueira", "depCode":"IS", "department":"Information Systems", jobTitle:"Web Developer", ext:"7485", profilePhote:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAVZAAAAJDA5ZDdhNzIwLTAwNmQtNGE1Ni1hMzZjLTYwM2VlZjNlMmY5OA.jpg"},
//    	{"firstName":"Colm", "lastName":"Daly", "depCode":"IS", "department":"Information Systems", jobTitle:"UAT Lead", ext:"2525", profilePhote:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAR_AAAAJGVkYmMyMzk3LWFkZTgtNGZjNi04ZWQ3LTNhM2FiNzk2MjViNA.jpg"},
//    	{"firstName":"Declan", "lastName":"Foy", "depCode":"IS", "department":"Information Systems", jobTitle:"Web Developer", ext:"0687", profilePhote:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/044/268/268eaf2.jpg"}
//		];
	$scope.chillbook = {
							title: 'BlueFace'         
        	}   
  })
.config(function($mdThemingProvider) {
						$mdThemingProvider.theme('dark-purple', 'default').primaryPalette('deep-purple').dark();
						$mdThemingProvider.theme('light-purple', 'default').primaryPalette('deep-purple');
				});