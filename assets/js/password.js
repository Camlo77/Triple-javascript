let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");
let select3 = document.querySelector("#select3");
let btnVerificar = document.querySelector("#btn-password");
let passwordResult = document.querySelector("#password-result")

btnVerificar.addEventListener('click', function() {
    let select1Value = select1.value
    let select2Value = select2.value
    let select3Value = select3.value
    if (select1Value == 9 && select2Value == 1 && select3Value == 1) {
        passwordResult.textContent = "password 1 correcto"
    } else if (select1Value == 7 && select2Value == 1 && select3Value == 4){
        passwordResult.textContent = "password 2 correcto"
    } else{
        passwordResult.textContent = "password incorrecto"
    }
})