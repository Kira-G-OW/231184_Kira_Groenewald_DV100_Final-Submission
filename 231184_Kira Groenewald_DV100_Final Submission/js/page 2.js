
let subOrder = [];

addSub = () => {

    let subCost = 0;

    let name = document.getElementById("subName").value
    let bread = document.getElementById("bread").value

    if(bread === "ciabatta"){
        subCost = subCost + 30;
    } else if (bread === "rye"){
        subCost = subCost + 20;
    } else if (bread === "sourdough"){
        subCost = subCost + 10;
    }

    let toppingOption = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOption.length; i++){
        if(toppingOption[i].checked){
            topArray.push(toppingOption[i].value)
            subCost = subCost + +toppingOption[i].dataset.cost
        }
    }

    let sauceOption = document.getElementsByName("sauces");
    let sauceArray = [];
    for(let i = 0; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            sauceArray.push(sauceOption[i].value)
            subCost = subCost + +sauceOption[i].dataset.cost
        }
    }

    subOrder.push({
        subName: name,
        subBread: bread,
        subToppings: topArray,
        subSauce: sauceArray,
        subCost: subCost
    })

    console.log(subOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("buildSub").reset()
}

realTimeCost = () => {

    subPrice = 0;

    let bread = document.getElementById("bread").value;

    if(bread === "ciabatta"){
        subPrice = subPrice + 30;
    } else if (bread === "rye"){
        subPrice = subPrice + 20;
    } else if (bread === "sourdough"){
        subPrice = subPrice + 10;
    }

    let toppingOption = document.getElementsByName("toppings");
    let topArray = [];
    for(let i = 0; i < toppingOption.length; i++){
        if(toppingOption[i].checked){
            subPrice = subPrice + +toppingOption[i].dataset.cost
        }
    }

    let sauceOption = document.getElementsByName("sauces");
    let sauceArray = [];
    for(let i = 0; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            subPrice = subPrice + +sauceOption[i].dataset.cost
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + subPrice + ".00"

}

orderDisplay = () => {


    let orders = document.getElementById("order-items");
    let total = document.getElementById("totalCost");

    orders.innerHTML = "";

    let orderTotal = 0;

    for(let i = 0; i < subOrder.length; i++){

        let name = subOrder[i].subName;
        let bread = subOrder[i].subBread;
        let toppings = subOrder[i].subToppings;
        let sauces = subOrder[i].subSauce;
        let cost = subOrder[i].subCost;

        orderTotal += cost;

        orders.innerHTML += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> ${name}</h5>
                        <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                        <p class="card-text"><strong>Toppings:</strong> ${toppings.join(', ')}</p>
                        <p class="card-text"><strong>Sauces:</strong> ${sauces.join(', ')}</p>
                        <p class="card-text"><strong>Sauces:</strong> R${cost}.00</p>
                    </div>
                </div>`

        total.innerHTML = "R" + orderTotal + ".00"        
    }


}

checkout = () => {
    let data = JSON.stringify(subOrder)
    localStorage.setItem('orders', data)
    window.location.href = '../pages/checkout.html'
}