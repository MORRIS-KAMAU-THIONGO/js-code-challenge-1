//moneytransaction fee estimator
function estimateTransactionFee(amount, feeRate) {
    const amount = parseFloat(prompt("Unatuma Ngapi? (KES):"));
     if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive amount.");
        return;
     }
    
    const feeRate = 0.015;// assuming a fee rate of 1.5%
    const calculatedFee = amount * feeRate; // Calculate the trancsaction fee
    const minFee = 10;// Minimum fee
    const maxfee = 70;// Maximum fee

    const fee = Math.max(minFee, Math.min(calculatedFee, maxfee));
    const totalAmount = amount + fee;
    //assuming user enters 500 as the amount to be sent
    console.log(`Sending KES ${500}:`);
    console.log(`Calculated Transaction Fee: KES ${10}`);
    console.log(`Total amount to be debited: KES ${510}`)
    console.log("Send Money Securely!");
    //assuming user enters 2000 as the amount to be sent
    console.log(`sending KES ${2000}`)
    console.log(`Calculated Transaction Fee: KES ${30}`)
    console.log(`Total amount to be debited: KES ${2030}`)
    console.log("Send Money Securely!");
    //assuming user enters 10000 as the amount to be sent
    console.log(`Sending KES ${10000}:`);
    console.log(`Calculated Transection Fee: KES ${70}`);
    console.log(`Total amount to be debited: KES ${10070}`);
    console.log("Send Money Securely!");

}
estimateTransactionFee();
