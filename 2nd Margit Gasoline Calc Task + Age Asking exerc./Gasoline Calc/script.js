
// You can optionally use querySelector here instead of getElementById:
function calculate() {
    let price = Number(document.querySelector("#price").value);
    let money = Number(document.getElementById("money").value);
    let answer = document.getElementById("answer");

    answer.textContent = money / price;
}


// function hello() {
//     alert("Hello, my name is Minna");
//     whoareyou();
// }

// function whoareyou() {
//     let yourname = prompt("What is your name?");
//     greeting(yourname);
// }

// function graating(name) {
//     document.write(name);
// }


// hello();