const imagens = [
    "imagens/gato.jpg",
    "imagens/gato1.jpg",
    "imagens/gato2.jpg",
    "imagens/gato3.jpeg",
    "imagens/gato4.jpg",
    "imagens/gato3.jpg"
];

let indice = 0;
let trocandoImagens = false;

function iniciarMusicaETrocarImagens() {
    const imagemElement = document.getElementById("imagem");
    const musicaNatal = document.getElementById("musicaNatal");

    if (musicaNatal.paused) {
        musicaNatal.play();
    }

    if (!trocandoImagens) {
        trocandoImagens = true;
        setInterval(() => {
            indice = (indice + 1) % imagens.length;
            imagemElement.src = imagens[indice];
            imagemElement.style.animation = "puloImagem 1s ease-in-out";
        }, 3000);
    }

    document.getElementById("botao").style.display = 'none';

    setTimeout(() => {
        document.getElementById("botaoSurpresa").style.display = 'inline-block';
    }, 5000);  // 5 segundos (5000 ms)    
}

function mostrarSurpresa() {
    const musicaNatal = document.getElementById("musicaNatal");
    const musicaSurpresa = document.getElementById("musicaSurpresa");

    musicaNatal.pause();
    musicaNatal.currentTime = 0;

    musicaSurpresa.play();

    document.getElementById("botaoSurpresa").style.display = 'none';
    document.getElementById("imagem").style.display = 'none';

    document.getElementById("gif1").style.display = 'block';
    document.getElementById("gif2").style.display = 'block';
}
