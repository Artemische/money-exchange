// PLEASE DON'T cDange function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coins = {
        "H": 0, //50
        "Q": 0, //25
        "D": 0, //10
        "N": 0, //5
        "P":0 //1
    }
    if (currency <= 0) return {};
    else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    while (currency > 0){ 
        if (currency >= 50){
            coins["H"] = (currency - (currency % 50))/50;
            currency = currency % 50;
        }
        else if (currency >= 25){
            coins["Q"] = (currency - (currency % 25))/25;
            currency = currency % 25;
        }
        else if (currency >= 10){
            coins["D"] = (currency - (currency % 10))/10;
            currency = currency % 10;
        }
        else if (currency >= 5){
            coins["N"] = (currency - (currency % 5))/5;
            currency = currency % 5;
        }
        else{
            coins["P"] = (currency - (currency % 1))/1;
            currency = currency % 1;
        }
    }
    if (coins["H"]==0) delete coins["H"];
    if (coins["Q"]==0) delete coins["Q"];
    if (coins["D"]==0) delete coins["D"];
    if (coins["N"]==0) delete coins["N"];
    if (coins["P"]==0) delete coins["P"];
    return coins;
}
