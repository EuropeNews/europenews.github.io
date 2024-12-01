document.addEventListener("DOMContentLoaded", async function () {
    const repoOwner = "europenews"; // Vervang dit met jouw GitHub-gebruikersnaam
    const repoName = "europenews.github.io"; // Vervang dit met jouw repositorynaam
    const updateList = document.getElementById("updateList");
    const popup = document.getElementById("updatePopup");
    const closePopup = document.getElementById("closePopup");

    // Functie om een datum te formatteren
    function formatDate(isoDate) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(isoDate).toLocaleDateString("nl-NL", options);
    }

    async function fetchUpdates() {
        try {
            const response = await fetch(
                `https://api.github.com/repos/${repoOwner}/${repoName}/commits`
            );
            if (!response.ok) {
                throw new Error("Kan de updates niet ophalen");
            }

            const commits = await response.json();

            // Voeg de laatste 5 commits toe aan de lijst
            commits.slice(0, 5).forEach(commit => {
                const listItem = document.createElement("li");
                const commitMessage = commit.commit.message; // Commitbericht
                const commitDate = formatDate(commit.commit.author.date); // Datum formatteren

                // Voeg bericht + datum toe aan de lijst
                listItem.textContent = `${commitMessage} (op ${commitDate})`;
                updateList.appendChild(listItem);
            });

            // Toon de pop-up
            popup.classList.remove("hidden");
        } catch (error) {
            console.error(error);
        }
    }

    // Haal de updates op
    await fetchUpdates();

    // Sluit de pop-up
    closePopup.addEventListener("click", function () {
        popup.classList.add("hidden");
    });
});
