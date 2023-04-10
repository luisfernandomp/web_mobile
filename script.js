var direita = document.querySelector('.btn-direita')

var esquerda = document.querySelector('.btn-esquerda')

var imagem1 = document.getElementById('img1')
var imagem2 = document.getElementById('img2')
var imagem3 = document.getElementById('img3')
var imagem4 = document.getElementById('img4')

var desk1 = document.getElementById('desk1')
var desk2 = document.getElementById('desk2')
var desk3 = document.getElementById('desk3')
var desk4 = document.getElementById('desk4')

var radio1 = document.getElementById('radio1')
var radio2 = document.getElementById('radio2')
var radio3 = document.getElementById('radio3')
var radio4 = document.getElementById('radio4')

var cont = 1


direita.addEventListener("click", ()=>{
    cont++
        if(cont == 1){
            imagem1.style.opacity = "1"
            desk1.style.opacity = "1"
            radio1.style.opacity = "1"

            imagem2.style.opacity = "0"
            desk2.style.opacity = "0"
            radio2.style.opacity = "0.2"

            imagem3.style.opacity = "0"
            desk3.style.opacity = "0"
            radio3.style.opacity = "0.2"

            imagem4.style.opacity = "0" 
            desk4.style.opacity = "0" 
            radio4.style.opacity = "0.2"
        }
        if (cont == 2) {
            imagem1.style.opacity = "0"
            desk1.style.opacity = "0"
            radio1.style.opacity = "0.2"

            imagem2.style.opacity = "1"
            desk2.style.opacity = "1"
            radio2.style.opacity = "1"

            imagem3.style.opacity = "0"
            desk3.style.opacity = "0"
            radio3.style.opacity = "0.2"

            imagem4.style.opacity = "0" 
            desk4.style.opacity = "0" 
            radio4.style.opacity = "0.2"
        }
        if(cont == 3){
            imagem1.style.opacity = "0"
            desk1.style.opacity = "0"
            radio1.style.opacity = "0.2"

            imagem2.style.opacity = "0"
            desk2.style.opacity = "0"
            radio2.style.opacity = "0.2"

            imagem3.style.opacity = "1" 
            desk3.style.opacity = "1" 
            radio3.style.opacity = "1"

            imagem4.style.opacity = "0" 
            desk4.style.opacity = "0" 
            radio4.style.opacity = "0.2"
        }
        if(cont == 4){
            imagem1.style.opacity = "0"
            desk1.style.opacity = "0"
            radio1.style.opacity = "0.2"

            imagem2.style.opacity = "0"
            desk2.style.opacity = "0"
            radio2.style.opacity = "0.2"

            imagem3.style.opacity = "0" 
            desk3.style.opacity = "0" 
            radio3.style.opacity = "0.2"

            imagem4.style.opacity = "1" 
            desk4.style.opacity = "1" 
            radio4.style.opacity = "1"
        }

        if(cont > 4){
            imagem1.style.opacity = "1"
            desk1.style.opacity = "1"
            radio1.style.opacity = "1"

            imagem2.style.opacity = "0"
            desk2.style.opacity = "0"
            radio2.style.opacity = "0.2"

            desk3.style.opacity = "0"
            imagem3.style.opacity = "0"
            radio3.style.opacity = "0.2"

            imagem4.style.opacity = "0" 
            desk4.style.opacity = "0" 
            radio4.style.opacity = "0.2"

            cont =1
        }
})

esquerda.addEventListener("click", ()=>{
    cont--
    if(cont == 4){
        imagem1.style.opacity = "0"
        desk1.style.opacity = "0"
        radio1.style.opacity = "0.2"

        desk2.style.opacity = "0"
        imagem2.style.opacity = "0"
        radio2.style.opacity = "0.2"

        desk3.style.opacity = "0"
        imagem3.style.opacity = "0"
        radio3.style.opacity = "0.2" 

        desk4.style.opacity = "1"
        imagem4.style.opacity = "1"
        radio4.style.opacity = "1" 
    }
    if(cont == 3){
        imagem1.style.opacity = "0"
        desk1.style.opacity = "0"
        radio1.style.opacity = "0.2"

        desk2.style.opacity = "0"
        imagem2.style.opacity = "0"
        radio2.style.opacity = "0.2"

        desk3.style.opacity = "1"
        imagem3.style.opacity = "1"
        radio3.style.opacity = "1" 

        desk4.style.opacity = "0"
        imagem4.style.opacity = "0"
        radio4.style.opacity = "0.2"
    }
    if (cont == 2) {
        imagem1.style.opacity = "0"
        desk1.style.opacity = "0"
        radio1.style.opacity = "0.2"

        desk2.style.opacity = "1"
        imagem2.style.opacity = "1"
        radio2.style.opacity = "1"

        desk3.style.opacity = "0"
        imagem3.style.opacity = "0"
        radio3.style.opacity = "0.2"

        desk4.style.opacity = "0"
        imagem4.style.opacity = "0"
        radio4.style.opacity = "0.2"
    }
    if(cont == 1){
        desk1.style.opacity = "1"
        imagem1.style.opacity = "1"
        radio1.style.opacity = "1"

        desk2.style.opacity = "0"
        imagem2.style.opacity = "0"
        radio2.style.opacity = "0.2"

        desk3.style.opacity = "0"
        imagem3.style.opacity = "0"
        radio3.style.opacity = "0.2"

        desk4.style.opacity = "0"
        imagem4.style.opacity = "0"
        radio4.style.opacity = "0.2"
    }
    if(cont < 1){
        desk1.style.opacity = "0"
        imagem1.style.opacity = "0"
        radio1.style.opacity = "0.2"

        desk2.style.opacity = "0"
        imagem2.style.opacity = "0"
        radio2.style.opacity = "0.2"

        desk3.style.opacity = "0"
        imagem3.style.opacity = "0"
        radio3.style.opacity = "0.2"

        desk4.style.opacity = "1"
        imagem4.style.opacity = "1"
        radio4.style.opacity = "1"
        cont = 4
    }
})

function irWallet() {
    location.href = "wallet.html";
}
