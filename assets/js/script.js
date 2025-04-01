document.addEventListener("DOMContentLoaded", function () {
    let games = [];

    // Fetch games from JSON file
    fetch("https://faf-games.github.io/games.json")
        .then(response => response.json())
        .then(data => {
            games = data; // Store games in memory
        })
        .catch(error => console.error("Error loading games:", error));

    // Search function (Triggers when typing)
    document.getElementById("gameSearch").addEventListener("input", function () {
        let input = this.value.toLowerCase().trim();
        let gameList = document.getElementById("gameList");

        if (input === "") {
            gameList.style.display = "none"; // Hide results if input is empty
            gameList.innerHTML = "";
            return;
        }

        // Filter games by search query
        let filteredGames = games.filter(game => game.name.toLowerCase().includes(input));

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
        gameList.innerHTML = ""; // Clear old results

        gameArray.forEach(game => {
            let gameItem = document.createElement("div");
            gameItem.classList.add("game-item");

            let gameImage = document.createElement("img");
            gameImage.src = `https://faf-games.github.io/${game.image}`;
            gameImage.alt = game.name;

            let gameName = document.createElement("span");
            gameName.textContent = game.name;

            let gameLink = document.createElement("a");
            gameLink.href = `https://faf-games.github.io/${game.url}`;
            gameLink.appendChild(gameImage);
            gameLink.appendChild(gameName);

            gameItem.appendChild(gameLink);
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
