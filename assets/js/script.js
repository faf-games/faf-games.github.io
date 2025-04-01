document.addEventListener("DOMContentLoaded", function () {
    let games = [];

    // Fetch games from JSON file
    fetch("https://faf-games.github.io/games.json")
        .then(response => response.json())
        .then(data => {
            games = data; // Store games in memory
            console.log("Games loaded:", games); // Debugging: Check if games load
        })
        .catch(error => console.error("Error loading games:", error));

    // Search function (Triggers when typing)
    document.getElementById("gameSearch").addEventListener("input", function () {
        let input = this.value.toLowerCase().trim();
        let gameList = document.getElementById("gameList");
        gameList.innerHTML = ""; // Clear previous results

        console.log("User input:", input); // Debugging: Check user input

        if (input === "") {
            gameList.style.display = "none"; // Hide if input is empty
            return;
        }

        // Filter games by input (allowing partial matches)
        let filteredGames = games.filter(game => game.name.toLowerCase().includes(input));
        console.log("Filtered games:", filteredGames); // Debugging: Check filter results

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
            gameImage.classList.add("game-image");

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
});
