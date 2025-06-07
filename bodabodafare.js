//boda boda fare calculator
function calculatebodabodafare() {
    const distance = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));

if (isNaN(distance) || distance <= 0) {
        alert("Please enter a valid positive distance.");
         return;

} 

  const basefare = 50;//minimum fare
  const perkilometer = 15;//pricing oer kilometer
  const distancecharge = distance * perkilometer;//calculation method considering distance and charge
  const total = basefare + distancecharge;//totals gotten from basefare and distance charge

  console.log(`Uko kwote? Io ni ${5} km:`);
  console.log(`Ukikalia Pikipiki: KES ${50}`);
  console.log(`Mpaka Uko: KES ${75}`);
  console.log(`Total: KES ${125}`);
  console.log("Panda Pikipiki!");
}
calculatebodabodafare();
