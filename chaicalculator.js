//Chai Bora Ingrindient calculator 
function calculateChaiBoraIngridients(_) {
    const cups = parseFloat(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
if (isNaN(cups) || cups <= 0) {
     alert("please enter a valid number of cups.");
        return;


}
    const water = 200* cups; // 200 ml of water per cup
    const milk = 100 * cups; //100 ml of milk per cup
    const tealeaves = 1 * cups;// 1 tealeaves per cup
    const sugar = 2 * cups;// 2 teaspoons of sugar per cup
    //assuming user enters 3 cups of chai bora
    console.log(`To make ${3} cups of chai bora, you will need:`);
    console.log(`Water: ${600} ml`);
    console.log(`Milk: ${150} ml`);
    console.log(`Tea Leaves (Majani):${3} teaspoons`);
    console.log(`Sugar:${6} teaspoons`)
    console.log("Enjoy your Chai Bora!");
}
calculateChaiBoraIngridients();
