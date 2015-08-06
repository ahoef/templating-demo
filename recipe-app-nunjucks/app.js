// to start local server: python -m SimpleHTTPServer 3000

$(function() {

    var appObject = {
        recipes: [
            {
                name: 'Waffles',
                cookTime: 9,
                prepTime: 10,
                ingredients: ['flour', 'water', 'sugar', 'vanilla'],
                directions: "Mix everything together in a bowl with a whisk. Use a waffle press to make your waffles!",
                isVegan: false,
                isPaleo: true,
                isGlutenFree: false
            },
            {
                name: 'Fruit Salad',
                cookTime: 0,
                prepTime: 10,
                ingredients: ['apples', 'oranges', 'grapes', 'watermelon'],
                directions: "Chop the fruit and mix together in a bowl",
                isVegan: true,
                isPaleo: true,
                isGlutenFree: true
            }
        ]
    };


    $('.recipes-partial').load('views/recipes.html');

    var res = nunjucks.render('views/recipes.html', appObject);

    function attachHtml() {
        $('.recipes').html(res);
    }

    window.setTimeout(attachHtml, 100);

});


