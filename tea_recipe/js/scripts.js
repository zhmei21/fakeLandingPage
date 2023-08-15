const calculateBtn = document.getElementById("calculateBtn");
const serving = document.getElementById("serving");
const recipeOutput = document.getElementById("recipeOutput");

calculateBtn.addEventListener("click", calculateRecipe);

function calculateRecipe() {
    const servings = parseInt(serving.value);

    // Replace these values with your actual recipe calculations
    const amount = 18 * servings;
    const butter = 185 * servings;
    const sugar = 75 * servings;
    const lemon = 1 * servings;
    const flour = 280 * servings;
    const fillingButter = 125 * servings;
    const icingSugar = 150 * servings;
    const lemonRind = 1 * servings;
    const lemonJuice = 120 * servings;

    // Convert to kilograms if over 1000 grams
    const butterDisplay = butter >= 1000 ? `${(butter / 1000).toFixed(2)} kg` : `${butter} grams`;
    const sugarDisplay = sugar >= 1000 ? `${(sugar / 1000).toFixed(2)} kg` : `${sugar} grams`;
    const flourDisplay = flour >= 1000 ? `${(flour / 1000).toFixed(2)} kg` : `${flour} grams`;
    const fillingButterDisplay = fillingButter >= 1000 ? `${(fillingButter / 1000).toFixed(2)} kg` : `${fillingButter} grams`;
    const icingSugarDisplay = icingSugar >= 1000 ? `${(icingSugar / 1000).toFixed(2)} kg` : `${icingSugar} grams`;
    const lemonJuiceDisplay = lemonJuice >= 1000 ? `${(lemonJuice / 1000).toFixed(2)} kg` : `${lemonJuice} grams`;

    const recipeHTML = `
        <h2>${amount} Servings of Lemon Cream Biscuits</h2>
        <h3>Biscuits</h3>
        <p>Butter: ${butterDisplay}</p>
        <p>Sugar: ${sugarDisplay}</p>
        <p>Lemon Zest: ${lemon} grated</p>
        <p>Flour: ${flourDisplay}</p>
        <h3>Filling</h3>
        <p>Butter: ${fillingButterDisplay}</p>
        <p>Icing Sugar: ${icingSugarDisplay}</p>
        <p>Lemon Rind: ${lemonRind} rind</p>
        <p>Lemon Juice: ${lemonJuiceDisplay}</p>
    `;

    recipeOutput.innerHTML = recipeHTML;
}
