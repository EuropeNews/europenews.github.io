// Wacht tot de DOM geladen is
document.addEventListener("DOMContentLoaded", function() {
    // Zoek het element met de id 'text-container'
    var textContainer = document.getElementById("text-container");

    // Maak een XMLHttpRequest om de inhoud van de NOS-homepagina op te halen
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.nos.nl/", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Zet de ontvangen HTML in de tekstcontainer
            textContainer.innerHTML = xhr.responseText;

            // Zoek naar het element waar de tekst zich bevindt (bijvoorbeeld een <div> met een specifieke class)
            var textElement = textContainer.querySelector('.text-container'); // Vervang 'example-class' door de daadwerkelijke class

            if (textElement) {
                // Voeg de tekst toe aan de tekstcontainer
                textContainer.innerHTML = textElement.innerHTML;
            } else {
                textContainer.innerHTML = "Kan de tekst niet vinden op de pagina.";
            }
        }
    };
    xhr.send();
});

var goBackToHomeSvgBtn = document.getElementById("close")

goBackToHomeSvgBtn.addEventListener("click", function() {
    // Toon het laadscherm
    document.getElementById("laadscherm").style.display = "flex";
    // Wacht 1 seconde voordat je de gebruiker doorstuurt
    setTimeout(function() {
        // Wijzig de locatie van het venster naar de gewenste URL
        window.location.href = "./";
    }, 1000); // Laad de pagina na 1 seconde

});