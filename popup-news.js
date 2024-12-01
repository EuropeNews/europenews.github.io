        // Functie om recente commits van GitHub op te halen
        async function fetchGitHubUpdates() {
            const username = 'europenews';  // Vervang met jouw GitHub-gebruikersnaam
            const repo = 'europenews.github.io';  // Vervang met jouw repository naam
            const url = `https://api.github.com/repos/${username}/${repo}/commits`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                const updates = data.slice(0, 5).map(commit => {
                    return {
                        title: commit.commit.message,
                        date: commit.commit.author.date.split('T')[0]  // Date zonder tijd
                    };
                });

                // Opslaan van updates in localStorage (optioneel)
                const existingUpdates = JSON.parse(localStorage.getItem('updates')) || [];
                const newUpdates = existingUpdates.concat(updates);
                localStorage.setItem('updates', JSON.stringify(newUpdates));

                // Toon de nieuwe updates in de popup
                displayUpdates(updates);

            } catch (error) {
                console.error('Error fetching GitHub updates:', error);
            }
        }

        // Functie om de updates weer te geven in de popup
        function displayUpdates(updates) {
            const updateList = document.getElementById('updateList');
            updateList.innerHTML = ''; // Maak de lijst leeg voordat je de nieuwe updates toevoegt

            updates.forEach(update => {
                const listItem = document.createElement('li');
                listItem.textContent = `${update.date}: ${update.title}`;
                updateList.appendChild(listItem);
            });

            // Toon de popup
            document.getElementById('updatePopup').style.display = 'block';
        }

        // Functie om de popup te sluiten en de laatst geziene update op te slaan
        document.getElementById('closePopup').addEventListener('click', function () {
            const updates = JSON.parse(localStorage.getItem('updates')) || [];
            if (updates.length > 0) {
                const lastUpdateDate = updates[updates.length - 1].date;
                localStorage.setItem('lastSeenUpdate', lastUpdateDate);  // Update de laatst geziene update
            }

            document.getElementById('updatePopup').style.display = 'none';
        });

        // Controleer of er nieuwe updates zijn
        function checkForUpdates() {
            const lastSeenDate = localStorage.getItem('lastSeenUpdate');
            const updates = JSON.parse(localStorage.getItem('updates')) || [];

            // Filter de nieuwe updates die na de laatst geziene update zijn
            const newUpdates = updates.filter(update => !lastSeenDate || new Date(update.date) > new Date(lastSeenDate));

            if (newUpdates.length > 0) {
                displayUpdates(newUpdates);
            }
        }

        // Haal de updates op bij het laden van de pagina
        fetchGitHubUpdates();

        // Controleer of er nieuwe updates zijn
        checkForUpdates();
