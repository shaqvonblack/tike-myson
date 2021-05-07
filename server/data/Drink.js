module.exports = class Drink {
    constructor(drink) {
        this.id = drink.idDrink,
        this.name = drink.strDrink,
        this.category = drink.strCategory,
        this.drinkThumb = drink.strDrinkThumb,
        this.glass = drink.strGlass,
        this.iba = drink.strIBA,
        this.imageAttribution = drink.strImageAttribution,
        this.imageSource = drink.strImageSource,
        this.instructions = drink.strInstructions,
        this.ingredients = this.getIngredients(drink),
        this.video = drink.strVideo
    }
    getIngredients(drink) {
        let ingredients = []

        for (let index = 1; index < 16; index++) {
            if(drink[`strIngredient${index}`] && drink[`strMeasure${index}`]) {
                ingredients.push({
                    ingredient: drink[`strIngredient${index}`],
                    measure: drink[`strMeasure${index}`]
                })
            }
        }
        return ingredients
    }
}