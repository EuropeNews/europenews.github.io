// Zoek het element waar de paragraaf aan toegevoegd moet worden
const contentDiv = document.getElementById('content');

// Maak een nieuw paragraaf element
const paragraph = document.createElement('p');

// Zet de tekst in de paragraaf
paragraph.textContent = 'Dit is een voorbeeld van een paragraaf die met JavaScript is gemaakt.<br> dit is dus super grappig';

// Voeg de paragraaf toe aan de content div
contentDiv.appendChild(paragraph);

document.getElementById('searchButton').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'inline-block';
        searchInput.focus();
    } else {
        var query = searchInput.value;
        if (query) {
            window.location.href = 'search.html?q=' + encodeURIComponent(query);
        }
    }
});