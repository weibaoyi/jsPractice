function homeCtrl($timeout,data,$scope){
    console.log(data.data);
    $scope.data = data.data;
    $timeout(function(){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            autoplay: 2500,
            loop:true
        });
    },100)
}
function sortCtrl($scope, datas) {
    $scope.datas = datas.data
}
function sortlist($scope,data,$state,$rootScope){
    $scope.data=data.data;
    $scope.listFn=function(x){
        console.log(x);
        $rootScope.sort_data= x.name;
        $state.go("sort_detail")
    }
}
function shopperCtrl(data,$scope){
    //console.log(data.data)
    $scope.list=data.data.data
}
function mineCtrl($scope,data){
    $scope.data=data.data[0].list
}
function enterCtrl($scope){
    $scope.bolear=true;
    $scope.tihide=true;
    $scope.btn=function(){
        if(!$scope.text && !$scope.pass){
            $scope.bolear=false
        }else if($scope.text!="" && $scope.pass!=""){
            $scope.tihide=false
        }
    };
    $scope.mineblank=function(){
        $scope.bolear=true
    }
}
function sort_detailCtrl($scope, $state, $stateParams,$rootScope){
    console.log($rootScope.sort_data);
}
function sortsCtrl($scope, $state, $stateParams,$rootScope){
    console.log($rootScope.sort_data);
}
function detailCtrl(){
    new Swiper(".swiper-container",{
        autoplay:3000,
        pagination: '.swiper-pagination',
        loop:true
    })
}