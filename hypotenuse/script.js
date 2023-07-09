// let username;

// document.getElementById("btn").onclick = () => {
//     username = document.getElementById("input").value;
//     document.getElementById("mylabel").innerHTML=username;
// }




//program to find hypotenuse
document.getElementById("btn").onclick = () => {
    let a = document.getElementById("inputA").value;
    a = Number(a);
    let b = document.getElementById("inputB").value;
    b = Number(b);

    let c = Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)));
    document.getElementById("myC").innerHTML = "Side C:" + c;
}