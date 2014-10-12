angular.module('WBParser', [])
    .controller('ParseCtrl', ['$scope', function($scope) {
        
        $scope.districts = [
            { number: 999, name: "Mallorca", state: "sp" }
        ];
        
        $scope.parse = function() {
            // Empty Array
            $scope.districts = [];
            
            while($scope.inputText.indexOf("href") != -1) {
				
				// Extract district number
				var start = $scope.inputText.indexOf("href=")+9;
				var length = 3;
				var num = $scope.inputText.substr(start, length);
				
				if(num[0] == 0 && num[1] == 0)
					num = num.substr(2, 1);
				else if(num[0] == 0)
					num = num.substr(1, 2);
				
				// Extract district name
				start = $scope.inputText.indexOf("title=")+7;
				$scope.inputText = $scope.inputText.substr(start);
				length = $scope.inputText.indexOf("\">");
				var name = $scope.inputText.substr(0, length);
				
				// Add to array
				$scope.districts.push({
					number: parseInt(num),
					name: name,
					state: $scope.stateInput
				});			
				
//                console.log(name);
            }
			
			$scope.inputText = "Fertig!";
        };
        
    }]);