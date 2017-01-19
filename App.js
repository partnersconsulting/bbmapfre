angular.module('App', ["App.controllers", "App.services", "App.directives", "App.filters", 'ngAnimate', "ngRoute", "ngResource", 'ui.bootstrap', 'ngCsv'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'view/home.html',
                controller: 'HomeController'
            })
            .when('/cadastro_evento', {
                templateUrl: 'view/eventos.html',
                controller: 'EventosController'
            })
            /*.when('/cadastro_voluntario', {
                templateUrl: 'view/cadastro_voluntario.html',
                controller: 'VoluntariosController'
            })
            .when('/pesquisas', {
                templateUrl: 'view/pesquisas.html',
                controller: 'PesquisasController'
            })
            .when('/cadastro_pesquisa', {
                templateUrl: 'view/cadastro_pesquisa.html',
                controller: 'PesquisasController'
            })
            .when('/relatorios', {
                templateUrl: 'view/relatorios.html',
                controller: 'RelatoriosController'
            })*/
            

            .otherwise({ redirectTo: 'home' });

    });
