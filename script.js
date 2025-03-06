const robloxText = document.getElementById('robloxText');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupText = document.getElementById('popupText');

robloxText.addEventListener('mouseover', function() {
   
    popupImage.src = 'images/RobloxStudioIcon.jpeg';
    popupText.textContent = 'Roblox Studio est un environnement de développement où les utilisateurs peuvent créer leurs jeux Roblox.';

    popup.style.display = 'block';

    const rect = robloxText.getBoundingClientRect();
    popup.style.left = `${rect.right + 10}px`;
    popup.style.top = `${rect.top + window.scrollY - 50}px`;
});

robloxText.addEventListener('mouseout', function() {
    popup.style.display = 'none';
}); 

const roblox = document.getElementById('Roblox');
roblox.addEventListener('mouseover', function() {
   
    popupImage.src = 'images/Roblox.png';
    popupText.textContent = "Roblox est une plateforme de jeu en ligne où les utilisateurs peuvent jouer à des millions de jeux créés par d'autres utilisateurs. Grâce à son système de création de jeux intégré, Roblox permet à chacun de concevoir ses propres jeux et de les partager avec le monde entier.";

    popup.style.display = 'block';

    const rect = roblox.getBoundingClientRect();
    popup.style.left = `${rect.left}px`;
    popup.style.top = `${rect.bottom + window.scrollY}px`;
});

roblox.addEventListener('mouseout', function() {
    popup.style.display = 'none';
}); 

const edwarnewgate = document.getElementById('whitebeard');
const popup2 = document.getElementById('popup2');
const popupImage2 = document.getElementById('popupImage2');
const popupText2 = document.getElementById('popupText2');

edwarnewgate.addEventListener('click', function() {
    if (popup2.style.display === 'block') {
        popup2.style.display = 'none';
    } else {
    popupImage2.src = 'images/infowhite.jpg';
    popupText2.textContent = "Barbe Blanche (Edward Newgate) est l'un des pirates les plus puissants de l'univers de One Piece. Dans l'anime, il est reconnu pour son incroyable force et son pouvoir de trembler la terre grâce à son fruit du démon. Ce pouvoir lui permet de créer des vibrations destructrices capables de fissurer la réalité elle-même, laissant place à de nouveaux décors, mais que fait-il en plein milieu de mon site internet ??";

    popup2.style.display = 'block';

    const rect = edwarnewgate.getBoundingClientRect();
    popup2.style.left = `${rect.left +150}px`;
    popup2.style.top = `${rect.top + window.scrollY -250}px`;
    }
});


function attendre(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function SecondPage() {
 
    async function animation() {
        var audio = new Audio('Audio/whitebeardprime.mp3');
        audio.play();
        var imageBarbeBlanche = document.getElementById('whitebeard');
        imageBarbeBlanche.src = 'images/edwar.png';
        popup2.style.display = 'none';
        await attendre(1000);
        imageBarbeBlanche.src = 'images/withebeard.jpg';

        document.body.style.backgroundImage = 'url("images/fissureavif.avif")'; 
        await attendre(2000);
        window.location.href = 'Page2.html'; 
    }

    animation();
}

window.addEventListener('DOMContentLoaded', function() {
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
    var video3 = document.getElementById('video3');
    var video4 = document.getElementById('video4');
    var video5 = document.getElementById('video5');
    var video6 = document.getElementById('video6');

    video1.pause();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();
    video6.pause();

});


    

