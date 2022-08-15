const product= {count:3, price: 12.55, type:"libro"};

let total;

if (product.count > 0){
    total=product.count * product.price;
} else {
    total=0
}

console.log ("Total: " + total);

let tipoIVA = 0.21;

switch (product.type){
    case "alimentacion":
        tipoIVA = 0.10;
        break;
    case "libro":
        tipoIVA = 0.04;
        break;
}

console.log ("Tipo IVA: " + tipoIVA);

const IVA = total*tipoIVA;

console.log ("IVA: " + IVA);

console.log ("Total + IVA: " + total + IVA);
