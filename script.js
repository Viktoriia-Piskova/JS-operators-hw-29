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
    
    if(userDigit >=1){

        let lastDigit = "";
        let digitResult = "";

        while (userDigit > 0){
            
            lastDigit = userDigit % 10;
            userDigit = Math.floor(userDigit / 10);
            digitResult += lastDigit;
            document.querySelector("#digitResult").innerHTML = `${digitResult}`;

        }
    }


    else{
        document.querySelector("#digitResult").innerHTML = `Please, enter a valid number > 1`;
    }
}


//script for deposit calculator

document.querySelector('#calculateIncome').addEventListener("click", calculateIncome)


function calculateIncome(){

    
    const userMonths = parseFloat(document.querySelector('#userMonths').value);
    const userYearPercent = parseFloat(document.querySelector('#userPercent').value);
    const userInvestment = parseFloat(document.querySelector('#userInvestment').value);

    if (userInvestment > 0){

    const interestResult = userInvestment / 100 * userYearPercent / 12 * userMonths; 

    const incomeResult = interestResult + userInvestment;

    document.querySelector('#calcTotalIncome').innerHTML = `<p>You are going to earn ${interestResult}$. Total sum is ${incomeResult} </p>`
}

else if(isNaN(userInvestment)){
    document.querySelector('#calcTotalIncome').innerHTML = `<p>Please, enter sum of investment, at least 1$</p>`

}
}
