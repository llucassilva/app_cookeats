const data = [
    {
        Entrada:{
            Receita1:{
            id:0, 
                Title:"Brusqueta de cogumelo paris",
                Tempo: "31min",
                Rendimento: "10 porções",
                Ingredientes:[
                    "Cogumelo Paris fresco",
                    "Azeite",
                    "Dentes de alho",
                    "Tomate-cereja",
                    "Sal",
                    "Pimenta-do-reino",
                    "Cheiro-verde",
                    "Baguete ou pão italiano",
                    "Parmesão",
                    "Mussarela ou queijo meia cura",
                    "Folhas de orégano",

                ],
                Quantidade:[
                    "200 gramas",
                    "2 colheres de sopa",
                    "3 dentes",
                    "200 gramas",
                    "a gosto",
                    "a gosto",
                    "a gosto",
                    "uma unidade",
                    "a gosot",
                    "a gosot",
                    "a gosto",
                ],
                Preparo:[
                    "Limpe os cogumelos, corte em lâminas e reserve.",
                    "Em uma panela, coloque o azeite e frite os dentes de alho.",
                    "Adicione os cogumelos, mexa e deixe refogar até ficarem levemente macios.",
                    "Junte os tomates cortados ao meio e refogue por aproximadamente um minuto.",
                    "Desligue o fogo e tempere com sal, pimenta, e cheiro-verde picado. Reserve.",
                    "Corte a baguete, distribua os pedaços em uma forma e leve para assar em forno preaquecido a 220 °C por dez minutos.",
                    "Com o pão ainda quente, esfregue um dente de alho por cima.",
                    "Regue com azeite cada fatia e coloque os pedaços de mussarela, o refogado de cogumelo e cubra com parmesão ou queijo meia cura.",
                    "Volte ao forno por aproximadamente cinco minutos ou até derreter o queijo.",
                    "Sirva com as folhas de orégano. Bom apetite.",
                ],

        
            },
            Receita2: {
                id:1,
                Title: "Canapés de pão de queijo",
                Tempo: "50min",
                Rendimento: "8 porções",
                Ingredientes: [
                    "14 pães de queijo congelados",
                    "150 gramas de peito de peru",
                    "80 gramas de ricota",
                    "1 colher de sopa de maionese",
                    "4 colheres de sopa de creme de leite",
                    "Sal a gosto",
                    "Pimenta-do-reino a gosto",
                    "Pontas de cebolinha picada a gosto",
                    "2 damascos desidratados",
                ],
                Preparo: [
                    "Asse os pães de queijo no forno a 180 °C por cerca de 40 minutos.",
                    "Enquanto isso, coloque no processador o peito de peru com ricota, maionese, creme de leite, sal e pimenta-do-reino.",
                    "Bata tudo até obter uma textura de pasta.",
                    "Reserve na geladeira por 20 minutos.",
                    "Retire os pães de queijo do forno e corte-os ao meio.",
                    "Com os pães de queijo abertos, coloque o patê por cima de cada metade.",
                    "Corte os damascos em cubinhos e decore os canapés polvilhando por cima do patê.",
                    "Finalize decorando com as pontas de cebolinha.",
                    "Agora é só servir! Bom apetite.",
                ],
            },
            Receita3:{
                id:2,
                Title: "Pera assada com catupiry de chuchu",
                Tempo: " 15min",
                Rendimento: "1 porção",
                Ingredientes: [
                    "1 pera",
                    "5 ml de azeite de oliva",
                    "Sal a gosto",
                    "Pimenta-do-reino a gosto",     
                    "100 g de chuchu cozido no vapor",
                    "50 g de inhame cozido no vapor",
                    "12 g de nutritional yeast",
                    "15 ml de suco de limão",
                    "10 ml de azeite de oliva",
                    "1 g de agar-agar"
                ],
                Preparo: [
                    "Corte a pera ao meio e retire toda a polpa.",
                    "Passe o azeite na pera.",
                    "Tempere com sal e pimenta.",
                    "Asse por 5 minutos em forno a 180°C",
                    "Retire do forno e reserve.",
                    "Coloque todos os ingredientes no liquidificador.",
                    "Bata até misturar tudo.",
                    "Despeje em uma panela.",
                    "Deixe no fogo por 2 minutos.",
                    "Recheie as peras com o catupiry.",
                    "Asse por mais 5 minutos no forno a 180°C.",
               ],
            },
            Receita4:{
                id:3,
                Title: "Abóbora manteiga recheada com carne-seca",
                Tempo: "35min",
                Rendimento: " 1 porção",
                Ingredientes: [
                    "1 abóbora manteiga",
                    "Azeite a gosto",
                    "Cebola picada a gosto",                 
                    "Alho a gosto",
                    "Carne seca desfiada a gosto",
                    "Queijo ralado a gosto",
                ],
                Preparo: [
                    "Corte a abóbora ao meio e retire as sementes.",
                    "Asse por 20 a 25 minutos em forno a 180 °C.",
                    "Após retirar a abóbora do forno, remova a polpa e reserve.",
                    "Em uma panela, coloque o azeite e refogue a cebola, o alho e a carne seca desfiada.",
                    "Adicione a polpa da abóbora.",
                    "Em seguida, recheie as metades da abóbora com o refogado.",
                    "Salpique queijo ralado por cima.",
                    "Retorne ao forno para gratinar.",
                    "Sirva e bom apetite.",

                ],
            }
        },
        EntradaVeg:{
            Entradaveg1: {
                id:4,
                Title: "Bolo d agua",
                Tempo: "35min",
                Rendimento: " 12 porções",
                Ingredientes: [
                    "1 xícara de chá de açúcar",
                    "1/2 xícara de chá de óleo",
                    "250 ml de água",                 
                    "2 xícaras de chá de farinha de trigo",
                    "1 colher de sopa de fermento químico em pó",
                ],
                Preparo: [
                    "Em uma vasilha, coloque o açúcar, o óleo e bata bem.",
                    "Adicione a água aos poucos e continue batendo.",
                    "Acrescente a farinha peneirada e misture até ficar homogêneo.",
                    "Junte o fermento e misture delicadamente.",
                    "Transfira para uma forma untada e leve para assar em forno preaquecido a 180 °C por meia hora ou até dourar.",
                    "Aproveite cade pedaço dessa delícia .",
        
                ],
            },
            Entradaveg2: {
                id:5,
                Title: "Vinagrete de jiló",
                Tempo: "30min",
                Rendimento: "4 porções",
                Ingredientes: [
                        
                    "1 talo de alho-poró fatiado",
                    "2 dentes de alho amassados",
                    "2 jilós cortados em brunoise (cubos bem pequenos)",
                    "1 colher de sopa de melado",
                    "Suco de meio limão",
                    "1 colher de sopa de molho umami",
                    "1 pitada de sal",
                    "Pimenta-do-reino a gosto",

                ],
                Preparo: [
                    "Em uma panela com água fervente, cozinhe o alho-poró com os dentes de alho por 10 minutos.",
                    "Em seguida, escorra e reserve o caldo para usar em outras receitas.",
                    "Coloque o alho-poró em água gelada para interromper o cozimento. Reserve.",
                    "Para o vinagrete, em uma vasilha, coloque o jiló, o melado, o suco de limão, o molho umami, o sal e a pimenta-do-reino.",
                    "Misture tudo muito bem e reserve.",
                    "Para o molho, cozinhe a polpa de maracujá com água, melado e açúcar até reduzir bem.",
                    "Acrescente o leite de coco, misture e deixe ferver por alguns minutos.",
                    "Adicione o molho umami, misture e espere esfriar.",
                    "Em um prato acomode as folhas de alho-poró e coloque o vinagrete de jiló por cima.",
                    "Finalize com o molho e está pronto para servir. ",
        
                ],
            },
            Entradaveg3: {
                id:6,
                Title: "Batata Frita Quentinha",
                Tempo: "20min",
                Rendimento: "2 porções",
                Ingredientes: [
                    "Batatas (quantidade a gosto) cortadas em palitos",
                    "1 frigideira com óleo o sufisciente para cobrir as batatas",
                    "1/2 colher (sopa) de amido de milho",
                ],
                Preparo: [
                    "Corte as batas em palito e seque-as com papel toalha.",
                    "Coloque o óleo para esquentar, quando estiver bem quente, retire 1/2 xícara desse óleo e misture a 1/2 colher de amido de milho.",
                    "Após misturado, volte esse óleo para frigideira, frite as batatas em fogo médio até dourarem.",
                    "É uma dica que vale muito a pena, pois as batas ficam bem sequinhas.",
        
                ],
            },
            Entradaveg4:{
                id:7,
                Title: "Homus de beterraba",
                Tempo: "45min",
                Rendimento: "2 porções",
                Ingredientes: [
                    "2 beterrabas",
                    "Sal a gosto",
                    "Pimenta a gosto",
                    "Azeite a gosto",
                    "1 1/2 xícara de chá de grão-de-bico cozido",
                    "3 colheres de sopa de Tahine",
                    "3 colheres de sopa de suco de limão",
                    "Zahtar a gosto",
                ],
                Preparo: [
                    "Descasque as beterrabas e corte em 4 partes.",
                    "Coloque elas em um papel alumínio, tempere com sal, pimenta e um pouco de azeite.",
                    "Feche o papel alumínio formando uma trouxinha e leve para assar em forno preaquecido a 180 °C por 35 minutos.",
                    "Em um processador, coloque o grão-de-bico, as beterrabas cozidas, o Tahine, o suco de limão e o azeite.",
                    "Bata até virar uma pastinha.",
                    "Transfira para uma tigela, regue com mais azeite e polvilhe um mais pouco de Zahtar e está pronto."
        
                ],
            }

        }
    }

]
