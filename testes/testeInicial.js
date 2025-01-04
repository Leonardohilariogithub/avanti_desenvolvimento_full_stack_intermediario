console.log("hello word");

//alert("Bem Vindo!!!");

function Soma(){
    var e1 = parseInt(document.getElementById("v1").value);
    var e2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta: " + (e1 + e2);

    var x = document.getElementById("paragrafo");
    if (e1 <= e2) {
        x.innerHTML = " Hello "+ " e1 é menor que e2 ";
    } else {
        x.innerHTML = " Hello "+ " e1 é maior que e2 ";
    }
    if (e1 == e2) {
        x.innerHTML = " Hello "+ " e1 e e2 sao iguais! ";
    }
}


function mFuncao() {
    var x = document.getElementById("paragrafo");
    x.innerHTML = "Hello"; 
}