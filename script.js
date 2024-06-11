var Article1 = document.getElementById("Article1")

Article1.addEventListener("click", function() {
     // Toon het laadscherm
     document.getElementById("laadscherm").style.display = "flex";
     // Wacht 1 seconde voordat je de gebruiker doorstuurt
     setTimeout(function() {
         // Wijzig de locatie van het venster naar de gewenste URL
         window.location.href = "./artikel/0000001-Rusland-begint-oorlog-met-Polen";
     }, 1000); // Laad de pagina na 1 seconde
     document.getElementById("laadscherm").style.display = "none";              
 
});

// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive JS here
});
