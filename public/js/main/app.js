var app=angular.module("app.todos",["xeditable"]);

app.controller("todoController",['$scope',function($scope){
    
    $scope.appName="Node Todos !!!";
    
    $scope.formData={};

    $scope.todos=[
        {
            text:"Khởi tạo dự án, include thư viện bootstrap, fontawesome, angularjs,...",
            isDone:true
        },{
            text:"Cài đặt Angularjs app, controller, khởi tạo dữ liệu ban đầu",
            isDone: true
        },{
            text:"tạo service gọi api, binding dữ liệu, action...",
            isDone:false
        },{
            text:"Hoàn thành ứng dụng, deploy lên heroku ...",
            isDone:false
        }
    ];

    $scope.creatTodo=function(){
        var todo={
            text:$scope.formData.text,
            isDone:false
        }

        $scope.todos.push(todo);
        $scope.formData.text="";
    }

    $scope.updateTodo=function(todo){
        console.log("Update Todo: ", todo);
    }

    $scope.deleteTodo= function(todo){
        console.log("Delete Todo: ", todo);
    }
    
}]);