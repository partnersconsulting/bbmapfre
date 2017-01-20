angular.module("App.controllers", [])
    .controller("HomeController", function($scope, $rootScope) {
        $scope.links = [{
            title: "Eventos",
            icon: "fa-calendar",
            text: "Gerenciador de Eventos",
            //link: "/voluntarios"
            link: "/cadastro_evento"
        }];

    })
    .controller("EventosController", function($scope, $rootScope, $filter) {
        $rootScope.tabactive = 0;
        $rootScope.viewVoluntario = false;
        $scope.collapseFormEvento = true;

        function novo() {
            $scope.evento = $rootScope.modeloEvento;
            $scope.evento.data_cadastro = new Date();
            $scope.evento.ativo = true;
        }

        $scope.novoEvento = function() {
            $scope.collapseFormEvento = false;
            novo();

        }

        $scope.getPercCota = function(id) {
            if ($scope.evento) {
                return $scope.evento.tipoEvento.percs[id];
            }
        }
        $scope.getCotas = function(id) {
            if ($scope.evento) {
                return parseInt( ($scope.evento.cotas / 100) * $scope.getPercCota(id) );
            }
        }

    })



.controller("MainController", function($scope, $rootScope, $filter, $uibModal, $document, $location) {


    $rootScope.dataValidade = function(date) {
        if (date) {
            var newDate = new Date(new Date(date).setMonth(date.getMonth() + 6));
            return $filter('date')(newDate, "dd/MM/yyyy");;
        }
    }

    $rootScope.newDate = new Date();

    $rootScope.listaTemplates = [
        { name: 'Convite Show' },
        { name: 'Convite Jogo' }
    ];
    $rootScope.listaCanaisEnvio = [
        { name: 'Email' },
        { name: 'SMS' },
        { name: 'MAIS EFETIVO' }
    ];
    $rootScope.listaCanaisRSVP = [
        { name: 'CALL LIST' },
        { name: 'Email' },
        { name: 'SMS' }
    ];

    $rootScope.listaTipos = [
        { name: 'Concertos', percs: [30, 30, 5, 5, 10, 10, 2, 2, 6] },
        { name: 'Peças de Teatro', percs: [40, 20, 10, 11, 5, 5, 5, 2, 2] },
        { name: 'Jogos de Tenis', percs: [15, 15, 15, 15, 15, 15, 5, 3, 2] },
        { name: 'Jogos de Futebol', percs: [10, 10, 10, 30, 10, 10, 5, 5, 10] }

    ];
    $rootScope.listaProgramas = [
        { name: 'Budget Q1 - Shows' },
        { name: 'Budget Q2 - Cliente Silver' },
        { name: 'Budget Q2 - Cliente Gold' },
        { name: 'Budget Q3' }

    ];
    $rootScope.listaGrupos = [
        { name: 'GA-SP Gold', desc: "Grupo Alvo São Paulo Gold" },
        { name: 'GA-SP Silver', desc: "Grupo Alvo São Paulo Silver" },
        { name: 'GA-SP Bronze', desc: "Grupo Alvo São Paulo Bronze" }

    ];

    $rootScope.modeloEvento = {
        id: '1',
        nome: 'NomeEvento',
        tipoEvento: $rootScope.listaTipos[0],
        programa: $rootScope.listaProgramas[0],
        local: 'local',
        dataInicio: new Date('06/29/2016'),
        horaInicio: '08:00',
        dataFim: new Date('06/29/2016'),
        horaFim: '22:00',
        descricao: 'descricao',
        templateYMkt: 0,
        cotas: 200,
        arquivoBanner: '',
        arquivoPagina: '',
        arquivoTeaser: '',
        arquivoLogomarca: '',
        arquivoRodape: '',
        arquivoClassificacao: '',
        canalEnvio: 0,
        canalRSVP: 0,

        grupos: [
            { grupo: $rootScope.listaGrupos[0], clienteInterno: "nome1" }

        ],

        convidados: [
            { nome: "nome1", email: "g1@gmail.com", telefone: "1199999999", clienteInterno: "nome1" }

        ]
    }

    $rootScope.listaEventos = [{
            id: '1',
            nome: 'Evento1',
            tipo: $rootScope.listaTipos[0],
            programa: $rootScope.listaProgramas[0],
            local: 'local 1',
            dataInicio: new Date('06/29/2016'),
            horaInicio: '10:20',
            dataFim: new Date('06/29/2016'),
            horaFim: '10:30',
            descricao: 'desc1',

            grupos: [
                { grupo: $rootScope.listaGrupos[0], clienteInterno: "nome1" }

            ],

            convidados: [
                { nome: "nome1", email: "g1@gmail.com", telefone: "1199999999", clienteInterno: "nome1" }

            ],
            /*
            sexo: 'masculino',
            email: 'marcos_aurelio@gmail.com',
            rg: '99899444455',
            cpf: '77799955500',
            perfil: 'A',
            cep: '04013-010',
            rua: 'Rua jose gomes sá',
            numero: '21',
            complemento: '',
            bairro: 'Vila Mariana',
            cidade: 'São Paulo',
            estado: 'SP',
            pais: 'Brasil',
            obs: 'Nada',
            ativo: true,
            pesquisas: [
                { respondido: new Date('7/30/2016'), pesquisa: $rootScope.listaPesquisas[0] },
                { respondido: new Date('5/5/2016'), pesquisa: $rootScope.listaPesquisas[1] },
                { respondido: null, pesquisa: $rootScope.listaPesquisas[2] },
                { respondido: null, pesquisa: $rootScope.listaPesquisas[3] },
                { respondido: null, pesquisa: $rootScope.listaPesquisas[4] }
            ],
            anexos: [
                { id: 1, nome: 'webcam', url: './view/images/h5.jpg', tamanho: '1MB', data: new Date('7/30/2016') },
                { id: 2, nome: 'rg', url: null, tamanho: '2MB', data: new Date('4/12/2016') },
                { id: 3, nome: 'cpf', url: null, tamanho: '10MB', data: new Date('1/20/2016') }
            ]*/
        }

    ];



})



.controller("VoluntariosController", function($scope, $rootScope, $filter) {


        $rootScope.tabactive = 0;
        $rootScope.viewVoluntario = false;
        $scope.collapseFormValuntario = true;



        function novo() {
            $scope.voluntario = {};
            $scope.voluntario.data_cadastro = new Date();
            $scope.voluntario.ativo = true;
        }

        $scope.getRandomFoto = function() {
            var n = Math.floor(Math.random() * 4) + 1;
            return './view/images/r' + n + '.jpg';
        }


        $scope.links = [{
                title: "Cadastro",
                icon: "fa-plus-square",
                text: "Cadastro de Voluntarios",
                link: "/cadastro_voluntario"
            }
            /*, {
                        title: "Relatórios",
                        icon: "fa-search",
                        text: "Consultar Lista Voluntarios",
                        link: "/cotacoes"
                    }*/
        ];
        /*
                $rootScope.dataValidade = function(date) {
                    if (date) {
                        return date.getDate() + '/' + (date.getMonth() + 6) + '/' + date.getFullYear();
                    }
                }*/

        $scope.checkPesquisaUsada = function(id) {
            if ($scope.voluntario && $scope.voluntario.pesquisas) {
                return $filter('getById')($scope.voluntario.pesquisas, id);
            }
        }
        $scope.checkPesquisaVencida = function(id) {
            var pesquisa = $filter('getById')($scope.listaPesquisas, id);
            if (pesquisa) {
                //console.log(pesquisa.id + ">> " + pesquisa.validade + " | " + new Date() + " | " +( pesquisa.validade > new Date()) );
                return pesquisa.validade > new Date();
                // return $filter('getById')($scope.listaPesquisas, id).validade > new Date();
            }
        }

        $scope.addAnexo = function() {
            $scope.voluntario.anexos = [{ id: 1, nome: 'webcam', url: $scope.getRandomFoto(), tamanho: '1MB', data: new Date() }];
        }

        $scope.addPesquisa = function(idPesquisa) {

            if (!$scope.voluntario.pesquisas) {
                $scope.voluntario.pesquisas = [];
            }

            $scope.voluntario.pesquisas.push({ id: idPesquisa, pesquisa: $rootScope.listaPesquisas[idPesquisa] });
        }

        $scope.closeTabs = function() {
            $scope.voluntario = null;
            $rootScope.viewVoluntario = false;
            $scope.collapseFormValuntario = true;
        }

        $scope.novoVoluntario = function() {
            $scope.collapseFormValuntario = false;
            novo();

        }

        $scope.visualizarVoluntario = function(voluntario) {

            $scope.voluntario = voluntario;
            $rootScope.viewVoluntario = true;
            $scope.collapseFormValuntario = false;
        }

        $rootScope.onChangeCep = function() {

            if ($scope.voluntario.cep.length == 8) {

                var cep = $filter('getByCEP')($scope.listaCeps, $scope.voluntario.cep);

                if (cep != null) {
                    $scope.voluntario.rua = cep.rua;
                    $scope.voluntario.bairro = cep.bairro;
                    $scope.voluntario.cidade = cep.cidade;
                    $scope.voluntario.estado = cep.estado;
                }
            }
        }

        $scope.salvarVoluntario = function() {



            //if (formulario.$valid) {
            $scope.voluntario.id = $rootScope.voluntarios.length + 1;
            $scope.voluntario.sexo = $scope.voluntario.sexo.code;
            $scope.voluntario.perfil = $scope.voluntario.perfil.code;
            $scope.voluntario.cidade = $scope.voluntario.cidade.code;
            $scope.voluntario.estado = $scope.voluntario.estado.code;
            $rootScope.voluntarios.push($scope.voluntario);
            novo();
            $scope.addVoluntario = !$scope.addVoluntario;
            //}
        }

    })
    .controller("PesquisasController", function($scope, $rootScope) {
        $scope.links = [{
                title: "Cadastro",
                icon: "fa-plus-square",
                text: "Cadastro de Pesquisa",
                link: "/cadastro_pesquisa"
            }
            /*, {
                        title: "Relatórios",
                        icon: "fa-search",
                        text: "Consultar Lista Pesquisas",
                        link: "/cotacoes"

                    }*/
        ];

        novo();
        $rootScope.adicionandoPergunta = false;
        $rootScope.viewPesquisa = false;
        $scope.collapseFormPesquisa = true;




        $scope.visualizarPesquisa = function(pesquisa) {
            $scope.pesquisa = pesquisa;
            $rootScope.viewPesquisa = true;
            $scope.collapseFormPesquisa = false;
        }


        $scope.closeTabs = function() {
            $scope.pesquisa = null;
            $rootScope.viewPesquisa = false;
            $scope.collapseFormPesquisa = true;
        }




        function novo() {
            $scope.pesquisa = {};
            $scope.pesquisa.data_cadastro = new Date();
            $scope.pesquisa.ativo = true;

            $scope.pesquisa.perguntas = [];

            $scope.pergunta = {};
            $scope.pergunta.respostas = [];
        }

        $scope.novaPesquisa = function() {
            $scope.collapseFormPesquisa = false;
            novo();

        }

        $scope.addPergunta = function() {
            $scope.adicionandoPergunta = true;
            $scope.addResposta();
            $scope.addResposta();
        }

        $scope.addResposta = function() {
            $scope.pergunta.respostas.push({ id: $scope.pergunta.respostas.length, titulo: '' });
        }

        $scope.salvarPergunta = function() {
            $scope.pergunta.id = $scope.pesquisa.perguntas.length;
            $scope.pesquisa.perguntas.push($scope.pergunta);
            $scope.pergunta = {};
            $scope.pergunta.respostas = [];
            $scope.adicionandoPergunta = false;
        }

        $scope.salvarPesquisa = function() {
            $scope.pesquisa.id = $rootScope.listaPesquisas.length;
            $rootScope.listaPesquisas.push($scope.pesquisa);
            novo();
        }
    })
    .controller("RelatoriosController", function($scope, $rootScope, $filter) {

        $scope.busca = {};
        $scope.busca.sexo = {};
        $scope.busca.perfil = {};

        $scope.busca.cidade = {};
        $scope.busca.estado = {};

        $scope.busca.faixa_etaria = {};

        function init() {

        }



        $scope.exportHeader = function(tipo) {
            return ['Codigo', 'Nome', 'Telefone', 'Sexo', 'Nascimento', 'Perfil', 'Cidade', 'Ativo'];
        }

        $scope.exportArray = function(tipo) {
            var returnArray = [];
            for (var i = $rootScope.voluntarios.length - 1; i >= 0; i--) {
                var item = $rootScope.voluntarios[i];

                if ($scope.filterCodes(item)) {
                    var newObject = {};

                    newObject.id = item.id;
                    newObject.nome = item.nome;
                    newObject.telefone = item.telefone;
                    newObject.sexo = item.sexo;
                    newObject.data_nascimento = $filter('date')(item.data_nascimento, "dd/MM/yyyy");;
                    newObject.perfil = item.perfil;
                    newObject.cidade = item.cidade;
                    newObject.ativo = item.ativo;




                    returnArray.push(newObject);
                }
            }
            return returnArray;
        }

        $scope.filterCodes = function(obj) {
            var returnValue = true;

            if (returnValue && $scope.busca.sexo && $scope.busca.sexo.code) {
                returnValue = obj.sexo == $scope.busca.sexo.code;
            }

            if (returnValue && $scope.busca.perfil && $scope.busca.perfil.code) {
                returnValue = obj.perfil == $scope.busca.perfil.code;
            }

            if (returnValue && $scope.busca.ativo) {
                returnValue = obj.ativo == $scope.busca.ativo.code;
            }

            if (returnValue && $scope.busca.estado && $scope.busca.estado.code) {
                returnValue = obj.estado == $scope.busca.estado.code;
            }

            if (returnValue && $scope.busca.cidade && $scope.busca.cidade.code) {
                returnValue = obj.cidade == $scope.busca.cidade.code;
            }

            if (returnValue && $scope.busca.pesquisa) {
                var list = obj.pesquisas;
                var respondeu = false;
                for (var i = list.length - 1; i >= 0; i--) {
                    var itemPesquisa = list[i];
                    if (itemPesquisa.pesquisa.nome == $scope.busca.pesquisa.nome) {


                        if ($scope.busca.pesquisaRespondida != undefined) {


                            if ($scope.busca.pesquisaRespondida.code == 'sim') {
                                if (itemPesquisa.respondido != null) {
                                    respondeu = true;
                                }
                            } else if ($scope.busca.pesquisaRespondida.code == 'nao') {
                                if (itemPesquisa.respondido == null) {
                                    respondeu = true;
                                }
                            }


                        } else {
                            respondeu = true;
                        }
                    }
                }
                returnValue = respondeu;
            }

            if (returnValue && $scope.busca.tipoCategoria) {

            }

            if (returnValue && $scope.busca.tipoPesquisa) {

            }

            if (returnValue && $scope.busca.faixa_etaria && $scope.busca.faixa_etaria.code) {
                var age = ~~((Date.now() - obj.data_nascimento) / (31557600000));
                var filter = $scope.busca.faixa_etaria.code.split('|');
                returnValue = age >= filter[0] && age < filter[1];
                //console.log('faixa_etaria: ' + );
            }



            return returnValue;
        };




    });
