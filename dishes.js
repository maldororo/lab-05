const dishes = [
    {
        keyword: 'gazpacho',
        name: 'Гаспачо',
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'soups/gazpacho',
        kind: 'veg'
    },

    {
        keyword: 'mushroom-soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'soups/mushroom_soup',
        kind: 'veg'
    },

    {
        keyword: 'norwegian-soup',
        name: 'Норвежский суп',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'soups/norwegian_soup',
        kind: 'fish'
    },

    {
        keyword: 'ramen',
        name: 'Рамен',
        price: 375,
        category: 'soup',
        count: '425 г',
        image: 'soups/ramen',
        kind: 'meat'
    },

    {
        keyword: 'tom-yam',
        name: 'Том ям с креветками',
        price: 650,
        category: 'soup',
        count: '500 г',
        image: 'soups/tomyum',
        kind: 'fish'
    },

    {
        keyword: 'chicken-soup',
        name: 'Куриный суп',
        price: 330,
        category: 'soup',
        count: '350 г',
        image: 'soups/chicken',
        kind: 'meat'
    },

    {
        keyword: 'fried-potatoes',
        name: 'Жареная картошка с грибами',
        price: 150,
        category: 'main-dish',
        count: '250 г',
        image: 'main-dishes/friedpotatoeswithmushrooms1',
        kind: 'veg'
    },

    {
        keyword: 'lasagna',
        name: 'Лазанья',
        price: 385,
        category: 'main-dish',
        count: '310 г',
        image: 'main-dishes/lasagna',
        kind: 'meat'
    },

    {
        keyword: 'chicken-cutlets',
        name: 'Котлеты из курицы с картофельным пюре',
        price: 225,
        category: 'main-dish',
        count: '280 г',
        image: 'main-dishes/chickencutletsandmashedpotatoes',
        kind: 'meat'
    },

    {
        keyword: 'fish-cutlet',
        name: 'Рыбная котлета с рисом и спаржей',
        price: 320,
        category: 'main-dish',
        count: '270 г',
        image: 'main-dishes/fishrice',
        kind: 'fish'
    },

    {
        keyword: 'margherita-pizza',
        name: 'Пицца Маргарита',
        price: 450,
        category: 'main-dish',
        count: '470 г',
        image: 'main-dishes/pizza',
        kind: 'veg'
    },

    {
        keyword: 'shrimp-pasta',
        name: 'Паста с креветками',
        price: 340,
        category: 'main-dish',
        count: '280 г',
        image: 'main-dishes/shrimppasta',
        kind: 'fish'
    },

    {
        keyword: 'korean-salad',
        name: 'Корейский салат с овощами и яйцом',
        price: 330,
        category: 'salad',
        count: '250 г',
        image: 'salads/saladwithegg',
        kind: 'veg'
    },
  
    {
        keyword: 'caesar-salad',
        name: 'Цезарь с цыпленком',
        price: 370,
        category: 'salad',
        count: '220 г',
        image: 'salads/caesar',
        kind: 'meat'
    },

    {
        keyword: 'caprese',
        name: 'Капрезе с моцареллой',
        price: 350,
        category: 'salad',
        count: '235 г',
        image: 'salads/caprese',
        kind: 'veg'
    },

    {
        keyword: 'tuna-salad',
        name: 'Салат с тунцом',
        price: 480,
        category: 'salad',
        count: '250 г',
        image: 'salads/tunasalad',
        kind: 'fish'
    },

    {
        keyword: 'fries-caesar',
        name: 'Картофель фри с соусом Цезарь',
        price: 280,
        category: 'salad',
        count: '235 г',
        image: 'salads/frenchfries1',
        kind: 'veg'
    },
  
    {
        keyword: 'fries-ketchup',
        name: 'Картофель фри с кетчупом',
        price: 260,
        category: 'salad',
        count: '235 г',
        image: 'salads/frenchfries2',
        kind: 'veg'
    },

    {
        keyword: 'orange-juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'drinks/orangejuice',
        kind: 'cold'
    },
  
    {
        keyword: 'apple-juice',
        name: 'Яблочный сок',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'drinks/applejuice',
        kind: 'cold'
    },

    {
        keyword: 'carrot-juice',
        name: 'Морковный сок',
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'drinks/carrotjuice',
        kind: 'cold'
    },
  
    {
        keyword: 'cappuccino',
        name: 'Капучино',
        price: 180,
        category: 'drink',
        count: '300 мл',
        image: 'drinks/cappuccino',
        kind: 'hot'
    },

    {
        keyword: 'green-tea',
        name: 'Зеленый чай',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: 'drinks/greentea',
        kind: 'hot'
    },

    {
        keyword: 'black-tea',
        name: 'Черный чай',
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'drinks/tea',
        kind: 'hot'
    },

    {
        keyword: 'baklava',
        name: 'Пахлава',
        price: 220,
        category: 'dessert',
        count: '300 гр',
        image: 'desserts/baklava',
        kind: 'medium'
    },
 
    {
        keyword: 'cheesecake',
        name: 'Чизкейк',
        price: 240,
        category: 'dessert',
        count: '125 гр',
        image: 'desserts/checheesecake',
        kind: 'small'
    },
  
    {
        keyword: 'chocolate-cheesecake',
        name: 'Шоколадный чизкейк',
        price: 260,
        category: 'dessert',
        count: '125 гр',
        image: 'desserts/chocolatecheesecake',
        kind: 'small'
    },

    {
        keyword: 'chocolate-cake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        count: '140 гр',
        image: 'desserts/chocolatecake',
        kind: 'small'
    },

    {
        keyword: 'donuts-3',
        name: 'Пончики (3 штуки)',
        price: 410,
        category: 'dessert',
        count: '350 гр',
        image: 'desserts/donuts',
        kind: 'medium'
    },

    {
        keyword: 'donuts-6',
        name: 'Пончики (6 штук)',
        price: 650,
        category: 'dessert',
        count: '700 гр',
        image: 'desserts/donuts2',
        kind: 'large'
    }
];
