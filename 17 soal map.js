const currentcy = new Map([
    ["USD",14000],
    ["JPY",131],
    ["SGD",11000],
    ["MYR",3500],
])
let priceInIDR = priceInJPY * currentcy.get("JPY");
console.log(priceInIDR);