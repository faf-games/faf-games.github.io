document.addEventListener("DOMContentLoaded", function () {
    let games = [];
    let isDataLoaded = false;

    fetch("https://faf-games.github.io/games.json")
        .then(response => response.json())
        .then(data => {
            games = data;
            isDataLoaded = true;
        })
        .catch(error => console.error("Error loading games:", error));

    document.getElementById("gameSearch").addEventListener("input", function () {
        if (!isDataLoaded) {
            document.getElementById("gameList").innerHTML = "<p>Loading games...</p>";
            document.getElementById("gameList").style.display = "block";
            return;
        }

        const input = this.value.toLowerCase().trim();
        const gameList = document.getElementById("gameList");

        if (!input) {
            gameList.style.display = "none";
            gameList.innerHTML = "";
            return;
        }

        const filteredGames = games.filter(game => 
            game.name.toLowerCase().includes(input)
        );

        if (filteredGames.length > 0) {
            displayGames(filteredGames);
            gameList.style.display = "block";
        } else {
            gameList.innerHTML = "<p>No results found</p>";
            gameList.style.display = "block";
        }
    });

    function displayGames(gameArray) {
        const gameList = document.getElementById("gameList");
        gameList.innerHTML = "";

        gameArray.forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.classList.add("game-item");

            const gameLink = document.createElement("a");
            gameLink.href = `https://faf-games.github.io/${game.url}`;
            gameLink.textContent = game.name;

            gameItem.appendChild(gameLink);
            gameList.appendChild(gameItem);
        });
    }

    // Close results when clicking outside
    document.addEventListener("click", function (e) {
        const searchBox = document.getElementById("gameSearch");
        const gameList = document.getElementById("gameList");

        if (e.target !== searchBox && !gameList.contains(e.target)) {
            gameList.style.display = "none";
        }
    });
});
