// one array of all menu items to replace html tables

var menuSections = [
    {   name: "Appetizers",
        list: [
            {
                name: "Candy Yams",
                desc: "Sweet potatoes with a dash of our finest cinnamon.",
                icon: "http://divascancook.com/wp-content/uploads/2011/11/IMG_22021.jpg",
                price: 10
            },
            {
                name: "BBQ Chicken",
                desc: "Perfect wings smothered in sauce.",
                icon: "http://tailgategrilling.com/wp-content/uploads/2013/03/Grilled-Chicken-with-Root-Beer-Barbecue-Sauce.jpg",
                price: 10
            },
            {
                name: "Gimbap/Kimbap",
                desc: "Rice, meat, and vegetables are wrapped in a long seaweed roll.",
                icon: "https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg",
                price: 10
            },
            {
                name: "Ogok-bap",
                desc: "Rice mixed with multiple grains like black beans and foxtail millets.",
                icon: "http://english.chosun.com/site/data/img_dir/2017/02/08/2017020801389_0.jpg",
                price: 10
            }
        ]
    },

    {   name: "Main Course",
        list: [
            {
                name : "The Martin Luther King",
                desc : "Two glazed donuts, surrounding a bacon cheese burger with chopped fried onions.",
                icon : "http://i.pinimg.com/736x/cf/dc/03/cfdc035c6e280ea69e2fc5e9389e4a61.jpg",
                price: 10,
                slide: true
            },
            {
                name : "Fish & Chips",
                desc : "Fresh Fish, fried Chips, ketchup or tartar to dip.",
                icon : "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/8/1/1406931617815/Fish-and-chips-014.jpg",
                price: 10
            },
            {
                name : "Half-half Pizza",
                desc : "Mushroom, broccoli, chicken chunks, and tomato mixed with cheese 10 inch pie.",
                icon : "https://s-media-cache-ak0.pinimg.com/originals/d6/9a/32/d69a32c8fca1e012b329e3570ee8d3c2.jpg",
                price: 9
            },
            {
                name : "Classic Pasta",
                desc : "Pasta mixed with tomatoes and shredded onion at the top.",
                icon : "http://www.dosomethingnew.com/content/images/JamiesItalian_Food6.jpg",
                price: 7,
                slide: true
            },
            {
                name : "Bibimbap",
                desc : "An elegantly laid out dish with rice and an egg yolk in its center surrounded by multiple vegetables and meat.",
                icon : "http://cdn2.koreanbapsang.com/wp-content/uploads/2010/02/Bibimbap.jpg",
                price: 10
            },
            {
                name : "Mixed Sea Food",
                desc : "Different varieties od sea weed boiled with added spices.",
                icon : "http://whatisthaifood.com/wp-content/uploads/2012/12/thai_food.jpg",
                price: 15,
                slide: true
            },
            {
                name : "Samggye-tang",
                desc : "A young chicken is stuffed with sticky rice, ginseng, gingko nuts and dried jujube.",
                icon : "https://www.maangchi.com/wp-content/uploads/2007/10/samgyetang11.jpg",
                price: 10
            }
        ]
    },

    {   name: "Desserts",
        list: [
            {
                name : "Egg Roll Plate",
                desc : "It comes with the fried egg rolled inside a bread mixed with sauces and decorated with some strawberries.",
                icon : "https://i.pinimg.com/736x/02/e6/42/02e6421751a5747ead364dc3c9faf19d--dutch-food-healthy-weight.jpg",
                price: 10,
                slide: true
            },
            {
                name : "Coconut Ice Cream",
                desc : "Signature ice cream flavor of Trinidad and Tobago.",
                icon : "http://farm4.static.flickr.com/3335/4596202064_49a2bf75a5_o.jpg",
                price: 2
            },
            {
                name : "Chocolate Lava Cake",
                desc : "Chocolate goodness that melts in your mouth, with delicious homemade vanilla ice cream on the side.",
                icon : "http://s.eatthis-cdn.com/media/images/ext/711645580/salty-restaurant-desserts-tripchocmeltdown.jpg",
                price: 2
            },
            {
                name : "Nutella Crepes",
                desc : "Warm creamy Nutella. Fresh Fruit. Need we say more?",
                icon : "http://media.indiatimes.in/media/content/2015/Jul/des2_1436344824.jpg",
                price: 2
            },
            {
                name : "Chocolate Covered Strawberries",
                desc : "A dessert classic - you can't go wrong with this time-tested favorite.",
                icon : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_VVrVRfjGjpiW1KE01RMqaN0HNFTSEdj9dv4LB5Yu6rd5DWu",
                price: 2
            }
        ]
    },

    {   name: "Drinks",
        list: [
            {
                name : "Mango Lassi",
                desc : "A delicious martian drink made from mangos and yogurt.",
                icon : "https://images.kitchenstories.de/recipeImages/RP03_23_09_MangoLassi_TitlePicture/RP03_23_09_MangoLassi_TitlePicture-medium-landscape-200.jpg",
                price: 2
            },
            {
                name : "Taro Milk Boba Tea",
                desc : "An out of this world tea with boba comets.",
                icon : "https://s-media-cache-ak0.pinimg.com/736x/fd/34/cb/fd34cb1f271b40098924a936eeaf0bf3--asian-tea-tea-flavors.jpg",
                price: 2
            },
            {
                name : "Traditional Yerba Mate Tea",
                desc : "A popular south american energy booster.",
                icon : "https://bebrainfit.com/wp-content/uploads/2017/01/yerba-mate-tea-720x480.jpg",
                price: 2,
                slide: true
            },
            {
                name : "Raseberry Compote",
                desc : "A refeshing slavic drink made with fresh naturally sweet raspberries.",
                icon : "http://i.telegraph.co.uk/multimedia/archive/01434/prose6_1434575c.jpg",
                price: 2
            }
        ]
    }
];
