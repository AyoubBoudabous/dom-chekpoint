let plus = document.getElementsByClassName("plus-btn");
let minus = document.getElementsByClassName("minus-btn");
let qte = document.getElementsByClassName("quantité");
let price = document.getElementsByClassName("price");
let heart = document.querySelectorAll(".fa-heart");

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        qte[i].value++;
    });
}
for (let i = 0; i < plus.length; i++) {
    minus[i].addEventListener("click", function() {
        if (qte[i].value > 0) {
            qte[i].value--;
        }
    });
}
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function() {
        if ((heart[i].getElementsByClassName.color = "red")) {
            heart[i].style.color = "black";
        } else {
            heart[i].style.color = "red";
        }
    });
}
for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", function() {
        var elem = document.querySelector(".divv");
        elem.parentNode.removeChild(elem);
    });
}