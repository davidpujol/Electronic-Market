app.controller('controllerProducts', ['$scope', function($scope) {
    $scope.category = 'OFFERS';    //we need this to be in the same scope

    $scope.products = [
        {
            icon: 'img/Offers/aire_acondicionado.jpg',
            name: 'Air condicioning',
            price: 200,
            description: 'New air conditioning in perfect conditions, capable of cooling a whole floor in no more than 10 min.',
            code: '0001'
        },
        {
            icon: 'img/Offers/cafetera.jpg',
            name: 'Coffe machine',
            price: 40,
            description: 'Nespresso machine incluiding 2 packets of capsules with a 2 year guarantee',
            code: '0002'

        },
        {
            icon: 'img/Offers/estractor.jpg',
            name: 'Estractor',
            price: 460,
            description: 'Extractor industrial para ser instalado en tubo. Incluye ventilador interior de alta potencia, montado en estructura de acero .',
            code: '0003'

        },
        {
            icon: 'img/Offers/horno.jpg',
            name: 'Oven',
            price: 120,
            description: 'Horno Conveccional CANDY FST-100 6X. con doble mando mecanico - acero antihuellas - clase energetiva A y una capacidad de 65.',
            code: '0004'
        },
        {
            icon: 'img/Offers/lavadora.jpg',
            name: 'Washing machine',
            price: 500,
            description: 'Lavadora de carga frontal de 60 cm x 85 cm, con un nivel de ruido de 79 dB en el centrifugado y 62 dB de lavado. .',
            code: '0005'

        },

        {
            icon: 'img/Offers/lavavajillas.jpg',
            name: 'Dish washer',
            price: 410,
            description: 'Dishwasher with capability of 240L and with one year warranty.',
            code: '0006'

        },
        {
            icon: 'img/Offers/microondas.jpg',
            name: 'Microwave',
            price: 20,
            description: 'Microwave 40cm x 50cm. Color Black and 6 months warranty',
            code: '0007'

        },
        {
            icon: 'img/Offers/nevera.jpg',
            name: 'Fridge',
            price: 230,
            description: 'Fridge - OK OFK 35413 A2, 215 L, 41 dB, Antibacteriano, CFC, 184 cm, Clase A+, Grey',
            code: '0008'

        },

        {
            icon: 'img/Offers/planxa.jpg',
            name: 'Planxa',
            price: 35,
            description: 'La plancha Sensixx\'x DI90 AntiShine de Bosch tiene todo lo necesario para que planchar deje ser una tarea pesada. La salida de vapor de 65 gr/mn de esta plancha te garantiza un planchado rápido y eficaz en la primera pasada.',
            code: '0009'

        },
        {
            icon: 'img/Offers/sandwichera.jpg',
            name: 'Sandwich machine',
            price: 15,
            description: 'Esta Tefal SM1552 sandwichera es una sandwichera práctico que le permite hacer sándwiches perfectos con facilidad.',
            code: '0010'

        },
        {
            icon: 'img/Offers/tostadora.jpg',
            name: 'Toaster',
            price: 14,
            description: 'Color del producto: Acero inoxidable, Material de la carcasa: Acero inoxidable. Potencia: 1400, -\n' +
                'Ranura ancha · Ranura larga · 4 rebanadas · Acero inoxidable · Bandeja recogemigas',
            code: '0011'

        }
    ];


    $scope.computers = [
        {
            icon: 'img/Computers/pc1.jpg',
            name: 'Computer',
            price: 450,
            description: 'Portátil - Lenovo Ideapad 330-15IKB, 15.6", Intel® Core™ i5-8250U, 8 GB RAM + 16 GB Intel Optane, 1 TB HDD, Linux, Gris platino',
            code: '0012'
        },
        {
            icon: 'img/Computers/pc2.jpg',
            name: 'Computer',
            price: 509,
            description: 'Portátil - Toshiba Ideapad 330-15IKB, 14.6", Intel® Core™ i6, 4 GB RAM + 16 GB Intel Optane, 1 TB HDD, Linux, Negro',
            code: '0013'
        },
        {
            icon: 'img/Computers/pc3.jpg',
            name: 'Computer',
            price: 980,
            description: 'Portátil - MacBook Pro 330-15IKB, 15.6", Intel® Core™ i5-8250U, 4 GB RAM + 16 GB Intel Optane, 1 TB HDD, OSX, Gris platino',
            code: '0014'
        },
        {
            icon: 'img/Computers/pc4.jpg',
            name: 'Computer',
            price: 460,
            description: 'Portátil - Lenovo Ideapad 330-15IKB, 15.6", Intel® Core™ i7, 8 GB RAM + 16 GB Intel Optane, 1 TB HDD, Windows 7, Gris',
            code: '0015'
        },
        {
            icon: 'img/Computers/pc5.jpg',
            name: 'Computer',
            price: 680,
            description: 'Portátil - Samsung 330-15IKB, 15.6", Intel® Core™ i5, 8 GB RAM + 16 GB Intel Optane, 1 TB HDD, Windows 10, Gris platino',
            code: '0016'
        },
        {
            icon: 'img/Computers/pc6.jpeg',
            name: 'Computer',
            price: 710,
            description: 'Portátil - LG 330-15IKB, 15.6", Intel® Core™ i6, 8 GB RAM + 16 GB Intel Optane, 1 TB HDD, Windows 8, Gris platino',
            code: '0017'
        },
        {
            icon: 'img/Computers/pc7.jpg',
            name: 'Computer',
            price: 840,
            description: 'Portátil - Xioming 330-15IKB, 15.6", Intel® Core™ i7, 8 GB RAM + 16 GB Intel Optane, 1 TB HDD, Windows 10, Gris platino',
            code: '0018'
        },
        {
            icon: 'img/Computers/pc8.png',
            name: 'Computer',
            price: 700,
            description: 'Portátil - Lenovo 330-15IKB, 15.6", Intel® Core™ i5-8250U, 8 GB RAM + 16 GB Intel Optane, 1 TB HDD, Windows 10, Gris platino',
            code: '0019'
        }
    ];

    $scope.fans = [
        {
            icon: 'img/Fans/F1.jpg',
            name: 'Fan',
            price: 25,
            description: 'New air conditioning in perfect conditions, capable of cooling a whole floor in no more than 10 min.',
            code: '0020'
        },
        {
            icon: 'img/Fans/F2.jpg',
            name: 'Fan',
            price: 30,
            description: 'New air conditioning in perfect conditions, capable of cooling a whole floor in no more than 10 min.',
            code: '0021'
        },
        {
            icon: 'img/Fans/F3.jpg',
            name: 'Fan',
            price: 50,
            description: 'New air conditioning in perfect conditions, capable of cooling a whole floor in no more than 10 min.',
            code: '0022'
        },
        {
            icon: 'img/Fans/F4.jpg',
            name: 'Fan',
            price: 46,
            description: 'New air conditioning in perfect conditions, capable of cooling a whole floor in no more than 10 min.',
            code: '0023'
        },
        {
            icon: 'img/Fans/F5.jpg',
            name: 'Fan',
            price: 19,
            description: 'New air conditioning in perfect conditions, capable of cooling a whole floor in no more than 10 min.',
            code: '0024'
        },
        {
            icon: 'img/Fans/F6.jpeg',
            name: 'Fan',
            price: 58,
            description: 'New air conditioning in perfect conditions, capable of cooling a whole floor in no more than 10 min.',
            code: '0025'
        },
        {
            icon: 'img/Fans/F7.jpeg',
            name: 'Fan',
            price: 40,
            description: 'New air conditioning in perfect conditions, capable of cooling a whole floor in no more than 10 min.',
            code: '0026'
        },
        {
            icon: 'img/Fans/F8.jpg',
            name: 'Fan',
            price: 90,
            description: 'New air conditioning in perfect conditions, capable of cooling a whole floor in no more than 10 min.',
            code: '0027'
        }

    ];


    $scope.freezer = [
        {
            icon: 'img/Freezer/freezer1.jpg',
            name: 'Freezer',
            price: 350,
            description: 'Freezer - OK OFK 35413 A2, 235 L, 41 dB, Antibacteriano, CFC, 180 cm, Clase A++, Black',
            code: '0028'
        },
        {
            icon: 'img/Freezer/freezer2.jpg',
            name: 'Freezer',
            price: 400,
            description: 'Freezer - OK OFK 35413 A2, 280 L, 41 dB, Antibacteriano, CFC, 170 cm, Clase A+, Black.',
            code: '0029'
        },
        {
            icon: 'img/Freezer/freezer3.jpg',
            name: 'Freezer',
            price: 460,
            description: 'Freezer - OK OFK 35413 A2, 245 L, 41 dB, Antibacteriano, CFC, 175 cm, Clase A++, Grey',
            code: '0029'
        },
        {
            icon: 'img/Freezer/freezer4.jpg',
            name: 'Freezer',
            price: 450,
            description: 'Freezer - OK OFK 35413 A2, 250 L, 41 dB, Antibacteriano, CFC, 181 cm, Clase A, White',
            code: '0030'
        },
        {
            icon: 'img/Freezer/freezer5.jpeg',
            name: 'Freezer',
            price: 560,
            description: 'Freezer - OK OFK 35413 A2, 210 L, 41 dB, Antibacteriano, CFC, 182 cm, Clase A+, Orange',
            code: '0031'
        },
        {
            icon: 'img/Freezer/freezer6.jpg',
            name: 'Freezer',
            price: 600,
            description: 'Freezer - OK OFK 35413 A2, 215 L, 41 dB, Antibacteriano, CFC, 184 cm, Clase A+, Grey',
            code: '0032'
        }



    ];


    $scope.fridges = [
        {
            icon: 'img/Fridges/fridge1.jpg',
            name: 'Fridge',
            price: 400,
            description: 'Fridge - OK OFK 35413 A2, 215 L, 41 dB, Antibacteriano, CFC, 184 cm, Clase A+, Black',
            code: '0033'
        },
        {
            icon: 'img/Fridges/fridge2.jpg',
            name: 'Fridge',
            price: 450,
            description: 'Fridge - OK OFK 35413 A2, 215 L, 41 dB, Antibacteriano, CFC, 184 cm, Clase A++, Black',
            code: '0034'
        },

        {
            icon: 'img/Fridges/fridge3.png',
            name: 'Fridge',
            price: 700,
            description: 'Fridge - OK OFK 35413 A2, 215 L, 41 dB, Antibacteriano, CFC, 184 cm, Clase A, Grey.',
            code: '0035'
        },

        {
            icon: 'img/Fridges/fridge4.jpg',
            name: 'Fridge',
            price: 650,
            description: 'Fridge - OK OFK 35413 A2, 215 L, 41 dB, Antibacteriano, CFC, 184 cm, Clase A+, Grey.',
            code: '0036'
        },

        {
            icon: 'img/Fridges/fridge5.jpg',
            name: 'Fridge',
            price: 490,
            description: 'Fridge - OK OFK 35413 A2, 215 L, 41 dB, Antibacteriano, CFC, 184 cm, Clase A+, Grey.',
            code: '0037'
        },

        {
            icon: 'img/Fridges/fridge6.jpg',
            name: 'Fridge',
            price: 650,
            description: 'Fridge - OK OFK 35413 A2, 215 L, 41 dB, Antibacteriano, CFC, 184 cm, Clase A+, Grey.',
            code: '0038'
        },

        {
            icon: 'img/Fridges/fridge7.jpg',
            name: 'Fridge',
            price: 740,
            description: 'Fridge - OK OFK 35413 A2, 215 L, 41 dB, Antibacteriano, CFC, 184 cm, Clase A+, Grey.',
            code: '0039'
        },




    ];


    $scope.tv = [
        {
            icon: 'img/TV/TV1.jpg',
            name: 'TV',
            price: 400,
            description: 'TV LED 32" - LG 32LK6100PLB, Full HD, HDR, AI Smart TV ThinQ webOS 4.0, Procesador QuadCore',
            code: '0040'
        },
        {
            icon: 'img/TV/TV2.jpeg',
            name: 'TV',
            price: 300,
            description: 'TV LED 31" - LG 32LK6100PLB, Full HD, HDR, AI Smart TV ThinQ webOS 4.0, Procesador QuadCore',
            code: '0041'
        },
        {
            icon: 'img/TV/TV3.jpeg',
            name: 'TV',
            price: 360,
            description: 'TV LED 32" - LG 32LK6100PLB, Full HD, HDR, AI Smart TV ThinQ webOS 4.0, Procesador QuadCore',
            code: '0042'
        },
        {
            icon: 'img/TV/TV4.jpg',
            name: 'TV',
            price: 460,
            description: 'TV LED 30" - LG 32LK6100PLB, Full HD, HDR, AI Smart TV ThinQ webOS 4.0, Procesador QuadCore',
            code: '0043'
        },
        {
            icon: 'img/TV/TV5.jpg',
            name: 'TV',
            price: 700,
            description: 'TV LED 29" - LG 32LK6100PLB, Full HD, HDR, AI Smart TV ThinQ webOS 4.0, Procesador QuadCore',
            code: '0044'
        },
        {
            icon: 'img/TV/TV6.jpg',
            name: 'TV',
            price: 750,
            description: 'TV LED 33" - LG 32LK6100PLB, Full HD, HDR, AI Smart TV ThinQ webOS 4.0, Procesador QuadCore',
            code: '0045'
        },
        {
            icon: 'img/TV/TV7.jpg',
            name: 'TV',
            price: 710,
            description: 'TV LED 36" - LG 32LK6100PLB, Full HD, HDR, AI Smart TV ThinQ webOS 4.0, Procesador QuadCore',
            code: '0046'
        },

    ];


    $scope.washingMachines = [
        {
            icon: 'img/WashingMachines/WM1.jpg',
            name: 'Washing machine',
            price: 380,
            description: 'Lavadora carga frontal - Bosch WUQ24468ES, 8 kg, Pausa+Carga, Motor EcoSilence, Clase A+++, Blanco',
            code: '0047'
        },
        {
            icon: 'img/WashingMachines/WM2.jpg',
            name: 'Washing machine',
            price: 450,
            description: 'Lavadora carga frontal - Siemens WUQ24468ES, 8 kg, Pausa+Carga, Motor EcoSilence, Clase A+++, Blanco',
            code: '0048'
        },
        {
            icon: 'img/WashingMachines/WM3.png',
            name: 'Washing machine',
            price: 510,
            description: 'Lavadora carga frontal - Siemens WUQ24468ES, 8 kg, Pausa+Carga, Motor EcoSilence, Clase A+++, Blanco',
            code: '0049'
        },
        {
            icon: 'img/WashingMachines/WM4.jpeg',
            name: 'Washing machine',
            price: 570,
            description: 'Lavadora carga frontal - Samsung WUQ24468ES, 8 kg, Pausa+Carga, Motor EcoSilence, Clase A+++, Blanco',
            code: '0050'
        },
        {
            icon: 'img/WashingMachines/WM5.jpeg',
            name: 'Washing machine',
            price: 620,
            description: 'Lavadora carga frontal - Bosch WUQ24468ES, 8 kg, Pausa+Carga, Motor EcoSilence, Clase A+++, Blanco',
            code: '0051'
        },
        {
            icon: 'img/WashingMachines/WM6.jpg',
            name: 'Washing machine',
            price: 710,
            description: 'Lavadora carga frontal - Bosch WUQ24468ES, 8 kg, Pausa+Carga, Motor EcoSilence, Clase A+++, Blanco',
            code: '0052'
        },
        {
            icon: 'img/WashingMachines/WM7.jpg',
            name: 'Washing machine',
            price: 390,
            description: 'Lavadora carga frontal - Samsung WUQ24468ES, 8 kg, Pausa+Carga, Motor EcoSilence, Clase A+++, Blanco\n',
            code: '0053'
        },
    ];

}]);