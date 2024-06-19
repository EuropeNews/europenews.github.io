//var goBackToHomeSvgBtn = document.getElementById("close")

//goBackToHomeSvgBtn.addEventListener("click", function() {
    /// Toon het laadscherm
    //document.getElementById("laadscherm").style.display = "flex";
    /// Wacht 1 seconde voordat je de gebruiker doorstuurt
    //setTimeout(function() {
        /// Wijzig de locatie van het venster naar de gewenste URL
        //window.location.href = "./";
    //}, 1000); /// Laad de pagina na 1 seconde

//});

function goBackToHome() {
    document.getElementById("laadscherm").style.display = "flex";
    setTimeout(function() {
        window.location.href= "../../index.html"
    }, 1000);
};