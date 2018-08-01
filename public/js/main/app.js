var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ['$scope', 'svTodos', function ($scope, svTodos) {

    $scope.appName = "Node Todos !!!";

    $scope.formData = {};
    $scope.loading = true;    //su dung cho spinner

    $scope.todos = [];

    //load data from api
    svTodos.get().success(function (data) {
        $scope.todos = data;
        $scope.loading = false;   //su dung cho spinner
    });

    $scope.creatTodo = function () {
        $scope.loading = true;   //su dung cho spinner

        var todo = {
            text: $scope.formData.text,
            isDone: false
        }

        svTodos.create(todo).success(function (data) {
            $scope.todos = data;
            $scope.formData.text = "";
            $scope.loading = false;   //su dung cho spinner
        })
    }

    $scope.updateTodo = function (todo) {
        console.log("Update Todo: ", todo);
        $scope.loading = true;   //su dung cho spinner

        svTodos.update(todo)
            .success(function (data) {
                $scope.todo = data;
                $scope.loading = false;   //su dung cho spinner
            })

    }

    $scope.deleteTodo = function (todo) {
        console.log("Delete Todo: ", todo);
        $scope.loading = true;   //su dung cho spinner

        svTodos.delete(todo._id)
            .success(function (data) {
                $scope.todos = data;
                $scope.loading = false;   //su dung cho spinner
            });
    }

}]);