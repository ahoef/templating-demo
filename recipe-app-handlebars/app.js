$(function () {

    var template = $("#recipe-template").html();

    var compiledTemplate = Handlebars.compile(template);

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

    var compiledHtml = compiledTemplate(appObject);

    $('.content').html(compiledHtml);
});
    