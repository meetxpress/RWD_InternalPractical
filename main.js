var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope) {
    $scope.sid = "20MCA085";
    $scope.sname = "Meet Patel";
    $scope.userList = [];

    $scope.addToList = function () {
        $scope.flagcheck_fun();
        if ($scope.flagcheck) {
            $scope.inc = $scope.bsal > 20000 ? 5000 : 2000;
            $scope.userList.push({ fname: $scope.fname, lname: $scope.lname, dept: $scope.dept, bsal: $scope.bsal, inc: $scope.inc });
        } else {
            alert("Inset data to add in the list!");
        }
    }

    $scope.flagcheck_fun = function () {
        $scope.flagcheck = true;
        if ($scope.fname == null || $scope.lname == null || $scope.dept == null || $scope.bsal == null)
            $scope.flagcheck = false;
    };

    $scope.DeleteRow = function (aa) {
        $scope.userList.splice($scope.userList.indexOf(aa), 1);
    }
});