function init() {
    //lexical scope atau fungsi bersarang seperti parent and child
    let name = "Muhamad Rizki"
    function greet() {
        console.log(`Hello ${name}`)
    }
    greet();
}
init();