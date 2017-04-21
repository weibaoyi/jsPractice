/**
 * Created by kaka on 2017/4/11.
 */
app.directive('screen',function(sev){
    return {
        restirct:"ACEM",
        templateUrl:"tpls/shopper_list.html",
        replace:true,
        scope:{
            select:"="
        },
        controller:function($scope,$rootScope){
            $scope.add=function(){
                $scope.select.count++;
                $rootScope.total=$scope.select.count*$scope.select.price;
                fn()
            };
            $scope.sub=function(){
                $scope.select.count--;
                if($scope.select.count<=1){
                    $scope.select.count=1
                }
                fn()
            };
            fn();
            function fn(){
                var start=0;
                sev[$scope.select.name]=$scope.select.count*$scope.select.price;
                //console.log(sev)
                angular.forEach(sev,function(val,key){
                    //console.log(val)
                    start+=val
                });
                $rootScope.total=start;
                $rootScope.num=$scope.select.count
            }

        },
        link:function(scope,ele,attr){
            scope.rem=function(){
              if(confirm("你确定要删除么"))
                  ele.remove()
            }

        }

    }
});