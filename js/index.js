angular.module('MyApp',['ngMaterial', 'ngMessages','ngMdIcons'])
    .controller('AppCtrl', function($scope, $http) {
	
		$http.get('data/users.json')
       .then(function(response){
            $scope.users = response.data.users;
            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statusText;
        });
	   $scope.chillbook = {
            title: 'ChillBook'         
        } 
       $scope.doGreeting = function(greeting) {
        console.log(greeting);
      };
    $scope.searchFish = "";
       
  })
    .config(function($mdThemingProvider) {
						$mdThemingProvider.theme('dark-purple', 'default').primaryPalette('deep-purple').dark();
						$mdThemingProvider.theme('light-purple', 'default').primaryPalette('deep-purple');
				});