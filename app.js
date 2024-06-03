function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing === true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalAmount = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalAmount;
}
// phone plus and minus work
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})
// case plus and minus work
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})







// //---------------------------------------------------------------------------step 1 : case er plus and minus btn er kaj-----
// document.getElementById('case-plus').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) + 1;
// })

// document.getElementById('case-minus').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) - 1;
// })

// // function er moddhe kaj ta kivabe korte pari
// function updateCaseNumber(isIncreasing) {
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     if (isIncreasing) {
//         caseInput.value = parseInt(caseNumber) + 1;
//     }
//     else if (caseNumber > 0) {
//         caseInput.value = parseInt(caseNumber) - 1;
//     }
// }

// document.getElementById('case-plus').addEventListener('click', function () {
//     updateCaseNumber(true);
// })

// document.getElementById('case-minus').addEventListener('click', function () {
//     updateCaseNumber(false);
// })











// //------------------------------------------------------------------------step - 2 : case er plus minus korar sathe sathe price taoo kormbe barbe----------
// function updateCaseNumber(isIncreasing) {
//     const caseInput = document.getElementById('case-number');
//     let caseNumber = caseInput.value;
//     if (isIncreasing === true) {
//         caseNumber = parseInt(caseNumber) + 1;
//     }
//     else if (caseNumber > 0) {
//         caseNumber = parseInt(caseNumber) - 1;
//     }
//     caseInput.value = caseNumber;
//     // update case total
//     const caseTotal = document.getElementById('case-total');
//     caseTotal.innerText = caseNumber * 59;
//     // ekhane 2 ta + click korar pore price update korteche cz amder price upde hocche if er moddhe (caseInput) a giye But amder (caseNumber) ta if er agee. So amder id er moddhe (caseNumber) er kaj korte hobe. etar pore oo kaj korbe na cz(amra jani kono ekta const variable er man update hoy na)tai amra (caseNumber) ta const theke late kore dibo.
//     // function updateCaseNumber(isIncreasing) {
//     //     const caseInput = document.getElementById('case-number');
//     //     const caseNumber = caseInput.value;
//     // if (isIncreasing === true) {
//     //     caseInput.value = parseInt(caseNumber) + 1;
//     // }
//     // else if (caseNumber > 0) {
//     //     caseInput.value = parseInt(caseNumber) - 1;
//     // }
//     // // update case total
//     // const caseTotal = document.getElementById('case-total');
//     // caseTotal.innerText = caseNumber * 59;

// }

// document.getElementById('case-plus').addEventListener('click', function () {
//     updateCaseNumber(true);
// })

// document.getElementById('case-minus').addEventListener('click', function () {
//     updateCaseNumber(false);
// })









// //---------------------------------------------------------------- step 3 : phone er plus and minus btn er kaj korbo and sathe price oo update hobe---------------------------------------------------
// function updateProductNumber(product, price, isIncreasing) {
//     const productInput = document.getElementById(product + '-number');
//     // (product +,'-number') dewar karon jate ei number take case and phone 2 jon e nite pare. R product peramiter dite hobe.
//     let productNumber = productInput.value;
//     if (isIncreasing === true) {
//         productNumber = parseInt(productNumber) + 1;
//     }
//     else if (productNumber > 0) {
//         productNumber = parseInt(productNumber) - 1;
//     }
//     productInput.value = productNumber;
//     // update case total
//     const productTotal = document.getElementById(product + '-total');
//     productTotal.innerText = productNumber * price;

// }

// // phone plus and minus work
// document.getElementById('phone-plus').addEventListener('click', function () {
//     // peramiter a price 2nd position a ache er jonno 1219 price ta kaj korbe
//     // updateProductNumber(product, price, isIncreasing)
//     updateProductNumber('phone', 1219, true);
// })
// document.getElementById('phone-minus').addEventListener('click', function () {
//     updateProductNumber('phone', 1219, false);
// })

// // case plus and minus work
// document.getElementById('case-plus').addEventListener('click', function () {
//     updateProductNumber('case', 59, true);
// })

// document.getElementById('case-minus').addEventListener('click', function () {
//     updateProductNumber('case', 59, false);
// })






// //---------------------------------------------------------------- step 4 : phone and case er price barar sathe sathe (subtotal + tax + total) er kaj ---------------------------------------------------
// function updateProductNumber(product, price, isIncreasing) {
//     const productInput = document.getElementById(product + '-number');
//     let productNumber = productInput.value;
//     if (isIncreasing === true) {
//         productNumber = parseInt(productNumber) + 1;
//     }
//     else if (productNumber > 0) {
//         productNumber = parseInt(productNumber) - 1;
//     }
//     productInput.value = productNumber;
//     // update case total
//     const productTotal = document.getElementById(product + '-total');
//     productTotal.innerText = productNumber * price;
//     // calculateTotal function tak call kora hoiche
//     calculateTotal();
// }

// function getInputValue(product) {
//     const productInput = document.getElementById(product + '-number');
//     const productNumber = parseInt(productInput.value);
//     return productNumber;
// }
// function calculateTotal() {
//     // getInputValue(product)
//     const phoneTotal = getInputValue('phone') * 1219;
//     const caseTotal = getInputValue('case') * 59;
//     const subTotal = phoneTotal + caseTotal;
//     const taxAmount = subTotal / 10;
//     const totalAmount = subTotal + taxAmount;
//     document.getElementById('sub-total').innerText = subTotal;
//     document.getElementById('tax-amount').innerText = taxAmount;
//     document.getElementById('total-price').innerText = totalAmount;
// }

// // phone plus and minus work
// document.getElementById('phone-plus').addEventListener('click', function () {
//     updateProductNumber('phone', 1219, true);
// })
// document.getElementById('phone-minus').addEventListener('click', function () {
//     updateProductNumber('phone', 1219, false);
// })

// // case plus and minus work
// document.getElementById('case-plus').addEventListener('click', function () {
//     updateProductNumber('case', 59, true);
// })

// document.getElementById('case-minus').addEventListener('click', function () {
//     updateProductNumber('case', 59, false);
// })
