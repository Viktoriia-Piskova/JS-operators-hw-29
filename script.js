//script for calculating chocolate

document.querySelector("#chocolateDataInputs").addEventListener("change", countChocolates);


function countChocolates() {


    let userMoney = parseFloat(document.querySelector('#userMoney').value);
    let userPrice = parseFloat(document.querySelector('#userPrice').value);
    if ((userPrice > 0) && (userMoney >= 0)) {
        let chocolateResult = Math.floor(userMoney / userPrice);
        document.querySelector("#chocolateResult").innerHTML = `<p>You can buy ${chocolateResult} chocolates</p>`;
        let changeResult = userMoney % userPrice;
        document.querySelector("#changeResult").innerHTML = `<p>Your change is  ${changeResult} dollars.</p>`;
    }
    else {
        document.querySelector("#chocolateResult").innerHTML = `<p>Please, enter valid data and press Enter. All numbers must be bigger than 0. </p>`;
        document.querySelector("#changeResult").innerHTML = `<p>Unable to count :( </p>`;
    }

}


//script for backwards digit


document.querySelector("#userDigit").addEventListener("change", backwardDigit);

function backwardDigit(){
    let userDigit = parseFloat(document.querySelector("#userDigit").value);
    
    if(userDigit != undefined){

        let lastDigit = "";
        let digitResult = `Reversed number is ${lastDigit}`;

        while (userDigit > 0){
            
            lastDigit = userDigit % 10;
            userDigit = Math.floor(userDigit / 10);
            digitResult += lastDigit;
            document.querySelector("#digitResult").innerHTML = `Reversed number is ${digitResult}`;

        }

        //document.querySelector("#digitResult").innerHTML = `Reversed number is ${digitResult}`;

    }
}
