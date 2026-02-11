// Task-3:
// Your task is to calculate the total budget required to buy electronics:


function calculateElectronicsBudget(laptopsQuantity, tabletsQuantity, mobilesQuantity) {
    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 20000;

    let totalLaptopPrice = laptopPrice * laptopsQuantity;
    let totalTabletPrice = tabletPrice * tabletsQuantity;
    let totalMobilePrice = mobilePrice * mobilesQuantity;
    let totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    
    return totalPrice;
}
console.log(calculateElectronicsBudget(2,1,3));