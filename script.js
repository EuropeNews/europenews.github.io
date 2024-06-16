var Article1 = document.getElementById("Article1")
var Article2 = document.getElementById("Article2")
var Article3 = document.getElementById("Article3")

Article1.addEventListener("click", function() {
     // Toon het laadscherm
     document.getElementById("laadscherm").style.display = "flex";
     // Wacht 1 seconde voordat je de gebruiker doorstuurt
     setTimeout(function() {
         // Wijzig de locatie van het venster naar de gewenste URL
         window.location.href = "./artikel/0000001-Rusland-begint-oorlog-met-Polen";
         document.getElementById("laadscherm").style.display = "none";   
     }, 1000); // Laad de pagina na 1 seconde           
 
});

Article2.addEventListener("click", function() {
    // Toon het laadscherm
    document.getElementById("laadscherm").style.display = "flex";
    // Wacht 1 seconde voordat je de gebruiker doorstuurt
    setTimeout(function() {
        // Wijzig de locatie van het venster naar de gewenste URL
        window.location.href = "./artikel/0000002-Interview-Rusland-begint-oorlog-met-polen";
        document.getElementById("laadscherm").style.display = "none";   
    }, 1000); // Laad de pagina na 1 seconde           

});

Article3.addEventListener("click", function() {
    // Toon het laadscherm
    document.getElementById("laadscherm").style.display = "flex";
    // Wacht 1 seconde voordat je de gebruiker doorstuurt
    setTimeout(function() {
        // Wijzig de locatie van het venster naar de gewenste URL
        window.location.href = "./artikel/0000003-Vervolg-Rusland-begint-oorlog-met-Polen";
        document.getElementById("laadscherm").style.display = "none";   
    }, 1000); // Laad de pagina na 1 seconde           

});

// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive JS here
});
