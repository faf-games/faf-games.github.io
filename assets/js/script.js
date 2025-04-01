let games = [];

// Fetch games from JSON file
fetch("https://faf-games.github.io/games.json")
    .then(response => response.json())
    .then(data => {
        games = data.games;
        console.log("Games loaded:", games); // Debugging
    })
    .catch(error => console.error("Error loading games:", error));

// Function to display filtered games
function searchGames() {
    let input = document.getElementById("gameSearch").value.toLowerCase();
    let gameList = document.getElementById("gameList");

    // Hide if input is empty
    if (input.trim() === "") {
        gameList.style.display = "none";
        return;
    }

    if (games.length === 0) {
        console.error("Games data not loaded yet.");
        return;
    }

    let filteredGames = games.filter(game => game.name.toLowerCase().includes(input));
    
    if (filteredGames.length > 0) {
        displayGames(filteredGames);
        gameList.style.display = "block";
    } else {
        gameList.style.display = "none";
    }
}

// Function to display search results
function displayGames(gameArray) {
    let gameList = document.getElementById("gameList");
    gameList.innerHTML = ""; // Clear previous results

    gameArray.forEach(game => {
        let gameItem = document.createElement("div");
        gameItem.classList.add("game-item");

        let gameImage = document.createElement("img");
        gameImage.src = `https://faf-games.github.io/assets/images/${game.image}`;
        gameImage.alt = game.name;

        let gameName = document.createElement("span");
        gameName.textContent = game.name;

        // Clicking a game redirects to its link
        gameItem.onclick = function() {
            window.location.href = `https://faf-games.github.io/game/${game.url}`;
        };

        gameItem.appendChild(gameImage);
        gameItem.appendChild(gameName);
        gameList.appendChild(gameItem);
    });
}

// Add event listener to trigger search
document.getElementById("gameSearch").addEventListener("input", searchGames);

// Hide results when clicking outside
document.addEventListener("click", function(event) {
    let searchBox = document.getElementById("gameSearch");
    let gameList = document.getElementById("gameList");

    if (!searchBox.contains(event.target) && !gameList.contains(event.target)) {
        gameList.style.display = "none";
    }
});

