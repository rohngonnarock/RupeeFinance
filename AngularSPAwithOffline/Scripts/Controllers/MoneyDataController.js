var MoneyDataController = function ($scope) {
    $scope.dataAxis = ['100 - 2999', '3000 - 6999', '7000 - 8999', '9000 - 10000', '10000 - 99999'];
    $scope.dataAxisRate = [63.01];

    $scope.dataIndus = ['0 - 9999'];
    $scope.dataIndusRate = [63.12];

    $scope.dataICICI = ['0 - 1200000', '1200001 - 9999999'];
    $scope.dataICICIRate = [62.8];

    $scope.dataRia = ['50 - 5000'];
    $scope.dataRiaRate = [63.2];

    $scope.dataRemit = ['1000 - 50000'];
    $scope.dataRemitRate = [62.69];

    $scope.dataTrans = ['25 - 9999'];
    $scope.dataTransRate = [63.18];

    $scope.dataWestern = ['25 - 2999'];
    $scope.dataWesternRate = [63.06];

    $scope.dataXoom = ['25 - 9999'];
    $scope.dataXoomRate = [63.08];
}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
MoneyDataController.$inject = ['$scope'];