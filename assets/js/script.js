document.addEventListener("DOMContentLoaded", function () {
    let games = [];

    // Fetch games from JSON file
    fetch("https://faf-games.github.io/games.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Games JSON file not found!");
            }
            return response.json();
        })
        .then(data => {
            games = data;
        })
        .catch(error => console.error("Error loading games:", error));

    // Search function (Runs when typing)
    document.getElementById("gameSearch").addEventListener("input", function () {
        let input = this.value.toLowerCase();
        let gameList = document.getElementById("gameList");

        if (input === "") {
            gameList.style.display = "none"; // Hide when empty
            return;
        }

        let filteredGames = games.filter(game => game.name.toLowerCase().startsWith(input));

        if (filteredGames.length > 0) {
            displayGames(filteredGames);
            gameList.style.display = "block";
        } else {
            gameList.innerHTML = "<p>No results found</p>";
            gameList.style.display = "block";
        }
    });

    // Function to display search results
    function displayGames(gameArray) {
        let gameList = document.getElementById("gameList");
        gameList.innerHTML = ""; // Clear previous results

        gameArray.forEach(game => {
            let gameItem = document.createElement("div");
            gameItem.classList.add("game-item");

            let gameImage = document.createElement("img");
            gameImage.src = `https://faf-games.github.io/assets/images/${game.image || "default.png"}`;
            gameImage.alt = game.name;

            let gameName = document.createElement("span");
            gameName.textContent = game.name;

            gameItem.onclick = function () {
                window.location.href = `https://faf-games.github.io/${game.url}`;
            };

            gameItem.appendChild(gameImage);
            gameItem.appendChild(gameName);
            gameList.appendChild(gameItem);
        });
    }

    // Hide search results when clicking outside
    document.addEventListener("click", function (event) {
        let searchBox = document.getElementById("gameSearch");
        let gameList = document.getElementById("gameList");

        if (!searchBox.contains(event.target) && !gameList.contains(event.target)) {
            gameList.style.display = "none";
        }
    });
});
