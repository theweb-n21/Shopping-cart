// event handler plusBtn1 .
document.getElementById('plusBtn1').addEventListener('click', function () {

    getTotalNumber('defaultValue1')

    const defaultPrice1 = 1219;
    getTotalPrice('currentPrice1', defaultPrice1);
    getTotalPrice('currentSubTotal', defaultPrice1);

    const currentSubTotalPrice = document.getElementById('currentSubTotal').innerText;
    const currentSubTotalNumber = parseFloat(currentSubTotalPrice);
    const getVat = currentSubTotalNumber * 15 / 100;
    document.getElementById('addVat').innerText = getVat;
    document.getElementById('Totalprice').innerText = currentSubTotalNumber + getVat;


})

// event handler minusBtn1 .

document.getElementById('minusBtn1').addEventListener('click', function () {
    const currentValue = document.getElementById('defaultValue1').value;
    const currentValueNumber = parseInt(currentValue);
    if (currentValueNumber > 0) {
        getMinusNumber('defaultValue1');

        const defaultPrice1 = 1219;
        getMinusPrice('currentPrice1', defaultPrice1);

        getMinusPrice('currentSubTotal', defaultPrice1);

        const currentSubTotalPrice = document.getElementById('currentSubTotal').innerText;
        const currentSubTotalNumber = parseFloat(currentSubTotalPrice);
        const getVat = currentSubTotalNumber * 15 / 100;
        document.getElementById('addVat').innerText = getVat;
        document.getElementById('Totalprice').innerText = currentSubTotalNumber + getVat;

    }
})

// event handler plusBtn2 .
document.getElementById('plusBtn2').addEventListener('click', function () {

    getTotalNumber('defaultValue2')

    const defaultPrice2 = 59;
    getTotalPrice('currentPrice2', defaultPrice2);
    getTotalPrice('currentSubTotal', defaultPrice2);

    const currentSubTotalPrice = document.getElementById('currentSubTotal').innerText;
    const currentSubTotalNumber = parseFloat(currentSubTotalPrice);
    const getVat = currentSubTotalNumber * 15 / 100;
    document.getElementById('addVat').innerText = getVat;
    document.getElementById('Totalprice').innerText = currentSubTotalNumber + getVat;


})

// event handler minusBtn2 .

document.getElementById('minusBtn2').addEventListener('click', function () {
    const currentValue2 = document.getElementById('defaultValue2').value;
    const currentValueNumber2 = parseInt(currentValue2);
    if (currentValueNumber2 > 0) {
        getMinusNumber('defaultValue2');

        const defaultPrice2 = 59;
        getMinusPrice('currentPrice2', defaultPrice2);

        getMinusPrice('currentSubTotal', defaultPrice2);

        const currentSubTotalPrice = document.getElementById('currentSubTotal').innerText;
        const currentSubTotalNumber = parseFloat(currentSubTotalPrice);
        const getVat = currentSubTotalNumber * 15 / 100;
        document.getElementById('addVat').innerText = getVat;
        document.getElementById('Totalprice').innerText = currentSubTotalNumber + getVat;
    }

})

// remove event handler
document.getElementById('remove1').addEventListener('click', function () {
    document.getElementById('cart1').style.display = 'none';

   
})
// remove2 event handler
document.getElementById('remove2').addEventListener('click', function () {
    document.getElementById('cart2').style.display = 'none';
})



// functionality

function getTotalNumber(id) {
    const currentValue = document.getElementById(id).value;
    const currentValueNumber = parseInt(currentValue);
    const totalValueNumber = currentValueNumber + 1;
    document.getElementById(id).value = totalValueNumber;
}

function getMinusNumber(id) {
    const currentValue = document.getElementById(id).value;
    const currentValueNumber = parseInt(currentValue);
    const totalValueNumber = currentValueNumber - 1;
    document.getElementById(id).value = totalValueNumber;
}




function getTotalPrice(id, defaultPrice) {
    const currentPrice = document.getElementById(id).innerText;
    const currentPriceNumber = parseFloat(currentPrice);
    const totalPrice = currentPriceNumber + defaultPrice;
    document.getElementById(id).innerText = totalPrice;

}

function getMinusPrice(id, defaultPrice) {
    const currentPrice = document.getElementById(id).innerText;
    const currentPriceNumber = parseFloat(currentPrice);
    const totalPrice = currentPriceNumber - defaultPrice;
    document.getElementById(id).innerText = totalPrice;
}