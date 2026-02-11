var variavel = document.getElementById("text");
var imagem = document.getElementById("img");
var p = document.getElementById("p");
var h1 = document.querySelector("h1");

var data = new Date();
var hora = data.getHours(); 
var min = data.getMinutes();

function carregar() {
    if (hora >= 0 && hora < 12) {
        variavel.style.background = "#eae732"; //cor do fundo da div

        imagem.src = "img/dia.png"; //adiciona a imagem
        
        p.innerHTML = `Agora são ${hora}:${min} horas. Bom dia! Deus te abençoe!`; //adiciona o texto da hora
        p.style.color = "#0a0101"; //cor do texto da hora
        p.style.fontSize = "20px"; //tamanho do texto da hora
    
    } else if (hora >= 12 && hora < 18) {
        variavel.style.background = "#3470f0"; //cor do fundo da div
        
        imagem.src = "img/tarde.png"; //adiciona a imagem
        
        p.innerHTML = `Agora são ${hora}:${min} horas. Boa tarde! Deus te abençoe!`; //adiciona o texto da hora
        p.style.color = "#79f9cc"; //cor do texto da hora   
    
    }else{
        variavel.style.background = "#110236"; //cor do fundo da div
        
        h1.style.color = "#fff"; //cor do texto do h1
        
        imagem.src = "img/noite.png"; //adiciona a imagem

        p.innerHTML = `Agora são ${hora}:${min} horas. Boa noite! Deus te abençoe!`; //adiciona o texto da hora
        p.style.color = "#fff"; //cor do texto da hora
    }
}      
carregar();