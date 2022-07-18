//script fo calculating chocolate

document.querySelector("#chocolateDataInputs").addEventListener("change", countChocolates);


function countChocolates() {


    let userMoney = parseFloat(document.querySelector('#userMoney').value);
    let userPrice = parseFloat(document.querySelector('#userPrice').value);
    if ((userPrice > 0) && (userMoney >= 0)) {
        let chocolateResult = Math.floor(userMoney / userPrice);
        document.querySelector("#chocolateResult").innerHTML = `<p>You can buy ${chocolateResult} chocolates</p>`;
        let changeResult = userMoney % userPrice;
        document.querySelector("#changeResult").innerHTML = `<p>You will get ${changeResult} dollars.</p>`;
    }
    else {
        document.querySelector("#chocolateResult").innerHTML = `<p>Please, enter valid data and press Enter. All numbers must be bigger than 0. </p>`;
        document.querySelector("#changeResult").innerHTML = `<p>Unable to count :( </p>`;
    }

}