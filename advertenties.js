// Array met advertentie-URL's
var advertenties = [
    "amazon-banner-ad-example.png",
    "liquid-web-banner-ad-example.png",
    "windows10-pro.png"
];

// Index voor de huidige advertentie
var currentAdvertentieIndex = 0;

// Functie om de huidige advertentie te tonen
function toonHuidigeAdvertentie() {
    var advertentieElement = document.getElementById("advertentieContainer");
    var huidigeAdvertentieUrl = advertenties[currentAdvertentieIndex];
    
    // Voeg de huidige advertentie toe aan de advertentiecontainer
    advertentieElement.innerHTML = "<img src='" + huidigeAdvertentieUrl + "' alt='Advertentie'>";
}

// Functie om de volgende advertentie te tonen
function toonVolgendeAdvertentie() {
    currentAdvertentieIndex = (currentAdvertentieIndex + 1) % advertenties.length; // Ga naar de volgende advertentie in de array
    
    // Toon de nieuwe advertentie
    toonHuidigeAdvertentie();
}

// Roep de functie aan om de eerste advertentie te tonen wanneer de pagina is geladen
window.onload = function() {
    toonHuidigeAdvertentie(); // Toon de eerste advertentie
    
    // Stel een interval in om periodiek de volgende advertentie weer te geven (bijv. elke 10 seconden)
    setInterval(toonVolgendeAdvertentie, 10000); // 10000 milliseconden = 10 seconden
};
