document.addEventListener('DOMContentLoaded', (event) => {
    const copyButton = document.getElementById('copy-button');
    const paragraph = document.getElementById('text-to-copy');

    copyButton.addEventListener('click', () => {
        // Maak een tijdelijke textarea om de tekst in te plaatsen
        const textarea = document.createElement('textarea');
        textarea.value = paragraph.textContent;

        // Voeg de textarea toe aan het document
        document.body.appendChild(textarea);

        // Selecteer de tekst in de textarea
        textarea.select();
        textarea.setSelectionRange(0, 99999); // Voor mobiele apparaten

        // Kopieer de tekst naar het klembord
        navigator.clipboard.writeText(textarea.value).then(() => {
            alert('Tekst gekopieerd: ' + textarea.value);
        }).catch(err => {
            console.error('Fout bij het kopiëren van tekst: ', err);
        });

        // Verwijder de tijdelijke textarea
        document.body.removeChild(textarea);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-button');
    const paragraph = document.querySelector('[data-custom-id="text-to-share"]');

    shareButton.addEventListener('click', async () => {
        const textToShare = paragraph.textContent;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Voorbeeld Paragraaf',
                    text: textToShare,
                    url: window.location.href // Optioneel: voegt de huidige URL toe
                });
                alert('Tekst succesvol gedeeld!');
            } catch (error) {
                alert('Er is een fout opgetreden bij het delen: ' + error);
                console.error('Fout bij het delen:', error);
            }
        } else {
            alert('Web Share API wordt niet ondersteund in deze browser.');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded'); // voeg de 'loaded' class toe aan het body-element wanneer de pagina is geladen
});
