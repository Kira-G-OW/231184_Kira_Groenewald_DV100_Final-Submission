checkoutDisplay = () => {


    let data = JSON.parse(localStorage.getItem('orders'));
    let subs = document.getElementById('checkout');
    let orderTotal = document.getElementById('total');

    let checkoutTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = data[i].subName;
        let bread = data[i].subBread;
        let toppings = data[i].subToppings;
        let sauces = data[i].subSauce;
        let cost = data[i].subCost;

        checkoutTotal += cost;

        subs.innerHTML += `
                <div class="order">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Bread:</strong> ${bread}</p>
                    <p><strong>Toppings:</strong> ${toppings}</p>
                    <p><strong>Sauces:</strong> ${sauces.join(', ')}</p>
                    <p><strong>Cost:</strong> R${cost}.00</p>
                </div>`

        
        orderTotal.innerHTML = "R" + checkoutTotal + ".00";
    }

}

resetReturn = () => {
    localStorage.removeItem('orders');
    window.location.href = '../pages/index.html'
}