var app = angular.module("myApp", ["ui.router"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index/home");
    $urlRouterProvider.when("/index/sort","/index/sort/sortlist1");
    $urlRouterProvider.when("/sort_detail","/sort_detail/sorts");
    $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "tpls/index.html",
            controller:function($rootScope,$state){
                console.log($state.go);
                $rootScope.back = function() {//实现返回的函数
                    history.back()
                };
            }
        })
        .state("index.home",{
            url:"/home",
            templateUrl:"tpls/home.html",
            resolve:{
                data:function($http){
                    return $http.get('./server/home_1.json')
                }
            },
            controller:homeCtrl
        })
        .state("index.sort", {
            url: "/sort",
            templateUrl: "./tpls/sort.html",
            resolve: {
                datas: function ($http) {
                    return $http.get("./server/changyongfenlei.json")
                }
            },
            controller: sortCtrl
        })
        .state("index.sort.sortlist1", {
            url: "/sortlist1",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/changyong.json")
                }
            },
            controller: sortlist
        })
        .state("index.sort.sortlist2", {
            url: "/sortlist2",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/xianhua.json")
                }
            },
            controller: sortlist
        })
        .state("index.sort.sortlist3", {
            url: "/sortlist3",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/shangwuxianhua.json")
                }
            },
            controller: sortlist
        })
        .state("index.sort.sortlist4", {
            url: "/sortlist4",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/yongshenghua.json")
                }
            },
            controller: sortlist
        })
        .state("index.sort.sortlist5", {
            url: "/sortlist5",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/dangao.json")
                }
            },
            controller: sortlist
        })
        .state("index.sort.sortlist6", {
            url: "/sortlist6",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/teselipin.json")
                }
            },
            controller: sortlist
        })
        .state("index.sort.sortlist7", {
            url: "/sortlist7",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/pinpaigongzai.json")
                }
            },
            controller: sortlist
        })
        .state("index.sort.sortlist8", {
            url: "/sortlist8",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/lilan.json")
                }
            },
            controller: sortlist
        })
        .state("index.sort.sortlist9", {
            url: "/sortlist9",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/lvzhihuahui.json")
                }
            },
            controller: sortlist
        })
        .state("index.sort.sortlist10", {
            url: "/sortlist10",
            templateUrl: "tpls/sortlist.html",
            resolve: {
                data: function ($http) {
                    return $http.get("./server/qiaokeli.json")
                }
            },
            controller: sortlist
        })
        .state("index.flowerFind", {
            url: "/flowerFind",
            templateUrl: "tpls/flowerFind.html"
        })
        .state("index.shopper", {
            url: "/shopper",
            templateUrl: "tpls/shopper.html",
            resolve:{
                data:function($http){
                    return $http.get("server/shopper.json")
                }
            },
            controller:shopperCtrl
        })
        .state("index.mine",{
            url:"/mine",
            templateUrl:"tpls/mine_centre.html",
            resolve:{
                data:function($http){
                    return $http.get("./server/mine.json")
                }
            },
            controller:mineCtrl
        })
        .state("index.enter",{
            url:"/enter",
            templateUrl:"tpls/mine_enter.html",
            controller:enterCtrl
        })
        .state("index.enrol",{
            url:"/enrol",
            templateUrl:"tpls/mine_enrol.html"
        })
        .state("index.enrol.left",{
            url:"/left",
            templateUrl:"tpls/mine_shou.html"
        })
        .state("index.enrol.youxiang",{
            url:"/youxiang",
            templateUrl:"tpls/mine_postbox.html"
        })
        .state("sort_detail", {
            url: "/sort_detail",
            templateUrl: "tpls/sort_detail.html",
            controller:sort_detailCtrl
        })
        .state("sort_detail.sorts", {
            url: "/sorts",
            templateUrl: "tpls/sorts.html",
            controller:sortsCtrl
        })
        .state("sort_detail.detail", {
            url: "/detail",
            templateUrl: "tpls/detail.html",
            controller:detailCtrl
        })
        .state("recommend",{
            url:"/recommend",
            templateUrl:"tpls/recommend.html"
        }).state("giveFl",{
            url:"/giveFl",
            templateUrl:"tpls/giveFl.html"
        }).state("selectFl",{
            url:"/selectFl",
            templateUrl:"tpls/selectFl.html"
        }).state("fl_language",{
            url:"/fl_language",
            templateUrl:"tpls/fl_language.html"
        })
});